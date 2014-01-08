package frontend.websocket.service;

import frontend.config.spring.MappingJackson2MessageConverter;
import frontend.events.appointment.AppointmentCreatedEvent;
import frontend.events.appointment.AppointmentDeletedEvent;
import frontend.events.appointment.AppointmentUpdatedEvent;
import frontend.websocket.domain.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class AppointmentMessagingEventHandler implements AppointmentMessagingService {

	private final SimpMessageSendingOperations messagingTemplate;

	@Autowired
	public AppointmentMessagingEventHandler(SimpMessageSendingOperations messagingTemplate) {

		// TODO: Move this into the configuration.
		((SimpMessagingTemplate) messagingTemplate).setMessageConverter(new MappingJackson2MessageConverter());
		this.messagingTemplate = messagingTemplate;
	}

	@Override
	public void broadcastAppointmentCreated(AppointmentCreatedEvent createdEvent) {
		messagingTemplate.convertAndSend("/topic/appointment.created." + createdEvent.getAppointmentId(),
				Appointment.fromAppointmentDetails(createdEvent.getAppointmentDetails()));
	}

	@Override
	public void broadcastAppointmentDeleted(AppointmentDeletedEvent deletedEvent) {
		messagingTemplate.convertAndSend("/topic/appointment.deleted." + deletedEvent.getAppointmentId(),
				Appointment.fromAppointmentDetails(deletedEvent.getAppointmentDetails()));
	}

	@Override
	public void broadcastAppointmentUpdated(AppointmentUpdatedEvent updatedEvent) {
		messagingTemplate.convertAndSend("/topic/appointment.updated." + updatedEvent.getAppointmentId(),
				Appointment.fromAppointmentDetails(updatedEvent.getAppointmentDetails()));
	}
}
