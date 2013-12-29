package frontend.websocket.service;

import frontend.events.appointment.AppointmentCreatedEvent;
import frontend.events.appointment.AppointmentDeletedEvent;
import frontend.events.appointment.AppointmentUpdatedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Component;

@Component
public class AppointmentMessagingEventHandler implements AppointmentMessagingService {

	private final SimpMessageSendingOperations messagingTemplate;

	@Autowired
	public AppointmentMessagingEventHandler(SimpMessageSendingOperations messagingTemplate) {
		this.messagingTemplate = messagingTemplate;
	}

	@Override
	public void broadcastAppointmentCreated(AppointmentCreatedEvent createdEvent) {
		messagingTemplate.convertAndSend("/topic/appointment.created." + createdEvent.getAppointmentId(),
				createdEvent.getAppointmentDetails());
	}

	@Override
	public void broadcastAppointmentDeleted(AppointmentDeletedEvent deletedEvent) {
		messagingTemplate.convertAndSend("/topic/appointment.deleted." + deletedEvent.getAppointmentId(),
				deletedEvent.getAppointmentDetails());
	}

	@Override
	public void broadcastAppointmentUpdated(AppointmentUpdatedEvent updatedEvent) {
		messagingTemplate.convertAndSend("/topic/appointment.updated." + updatedEvent.getAppointmentId(),
				updatedEvent.getAppointmentDetails());
	}
}
