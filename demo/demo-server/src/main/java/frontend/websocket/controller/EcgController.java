package frontend.websocket.controller;

import frontend.events.ecg.EcgPointDetailsEvent;
import frontend.websocket.domain.EcgPoint;
import frontend.websocket.service.EcgMessagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class EcgController {

	private final EcgMessagingService messagingService;

	@Autowired
	public EcgController(EcgMessagingService messagingService) {
		this.messagingService = messagingService;
	}

	@MessageMapping(value = "/ecg")
	public void ecgRecieved(EcgPoint ecgPoint) {
		messagingService.broadcastEcgRead(new EcgPointDetailsEvent(ecgPoint.toEcgPointDetails()));
	}
}
