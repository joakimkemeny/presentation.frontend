package frontend.websocket.service;

import frontend.events.ecg.EcgPointDetailsEvent;

public interface EcgMessagingService {

	void broadcastEcgRead(EcgPointDetailsEvent detailsEvent);
}
