#!/bin/sh

g++ -lpthread -lrt -Ilib ecg.cpp lib/easywsclient.cpp lib/eHealth.cpp lib/arduPi.cpp -o bin/ecg
