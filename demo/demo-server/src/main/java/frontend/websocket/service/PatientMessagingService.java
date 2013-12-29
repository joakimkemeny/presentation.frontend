package frontend.websocket.service;

import frontend.events.patient.PatientCreatedEvent;
import frontend.events.patient.PatientDeletedEvent;
import frontend.events.patient.PatientUpdatedEvent;

public interface PatientMessagingService {

	void broadcastPatientCreated(PatientCreatedEvent createdEvent);

	void broadcastPatientDeleted(PatientDeletedEvent deletedEvent);

	void broadcastPatientUpdated(PatientUpdatedEvent updatedEvent);
}
