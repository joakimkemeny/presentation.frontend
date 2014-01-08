package frontend.websocket.service;

import frontend.events.ecg.EcgPointDetailsEvent;
import frontend.websocket.domain.EcgPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Component;

@Component
public class EcgMessagingEventHandler implements EcgMessagingService {

	private final SimpMessageSendingOperations messagingTemplate;

	@Autowired
	public EcgMessagingEventHandler(SimpMessageSendingOperations messagingTemplate) {
		this.messagingTemplate = messagingTemplate;
	}

	@Override
	public void broadcastEcgRead(EcgPointDetailsEvent detailsEvent) {
		messagingTemplate
				.convertAndSend("/topic/patient.ecg", EcgPoint.fromEcgPointDetails(detailsEvent.getEcgPointDetails()));
	}
}
