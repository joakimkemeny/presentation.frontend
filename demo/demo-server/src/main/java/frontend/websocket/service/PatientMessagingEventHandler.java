package frontend.websocket.service;

import frontend.events.patient.PatientCreatedEvent;
import frontend.events.patient.PatientDeletedEvent;
import frontend.events.patient.PatientUpdatedEvent;
import frontend.websocket.domain.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Component;

@Component
public class PatientMessagingEventHandler implements PatientMessagingService {

	private final SimpMessageSendingOperations messagingTemplate;

	@Autowired
	public PatientMessagingEventHandler(SimpMessageSendingOperations messagingTemplate) {
		this.messagingTemplate = messagingTemplate;
	}

	@Override
	public void broadcastPatientCreated(PatientCreatedEvent createdEvent) {
		messagingTemplate.convertAndSend("/topic/patient.created." + createdEvent.getPatientId(),
				Patient.fromPatientDetails(createdEvent.getPatientDetails()));
	}

	@Override
	public void broadcastPatientDeleted(PatientDeletedEvent deletedEvent) {
		messagingTemplate.convertAndSend("/topic/patient.deleted." + deletedEvent.getPatientId(),
				Patient.fromPatientDetails(deletedEvent.getPatientDetails()));
	}

	@Override
	public void broadcastPatientUpdated(PatientUpdatedEvent updatedEvent) {
		messagingTemplate.convertAndSend("/topic/patient.updated." + updatedEvent.getPatientId(),
				Patient.fromPatientDetails(updatedEvent.getPatientDetails()));
	}
}
