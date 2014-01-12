#include <ctime>
#include <iostream>
#include <sstream>
#include <stdio.h>
#include <string>
#include <sys/time.h>

#include "easywsclient.hpp"
#include "eHealth.h"

using easywsclient::WebSocket;
static WebSocket::pointer ws = NULL;

unsigned long get_current_time() {

	struct timeval tv;
	if (gettimeofday(&tv, NULL) != 0) {
		return 0;
	}

	return (unsigned long)((tv.tv_sec * 1000ul) + (tv.tv_usec / 1000ul));
}

void send_message(const std::string & message) {

	std::string s(message);
	s.push_back('\0');
	s.push_back('\n');

	std::cout << ">>>" << s << "\n";

	ws->send(s);
}

void handle_connect(const std::string & message) {

	std::cout << "<<<" << message << "\n";

	while (1) {

		std::stringstream commandStr;
		commandStr << "SEND\n";
		commandStr << "destination:/ecg\n\n{";
		commandStr << "\"x\":" << get_current_time();
		commandStr << ",\"y\":" << eHealth.getECG();
		commandStr << "}\n";

		send_message(commandStr.str());

		ws->poll();

		delay(10);
	}
	ws->close();
}

int main(int argc, char* argv[]) {

	if (argc < 2) {
		std::cout << "Usage: ecg ws://<host>:<port>/<path>\n";
		exit(0);
	}

	ws = WebSocket::from_url(argv[1]);
	send_message("CONNECT\naccept-version:1.1,1.0\n\n");
	while (ws->getReadyState() != WebSocket::CLOSED) {
		ws->poll();
		ws->dispatch(handle_connect);
	}

	delete ws;
	return 0;
}
