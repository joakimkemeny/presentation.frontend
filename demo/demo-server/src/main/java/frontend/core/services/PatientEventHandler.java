package frontend.core.services;

import frontend.events.patient.*;
import frontend.persistence.service.PatientPersistenceService;
import frontend.websocket.service.PatientMessagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PatientEventHandler implements PatientService {

	private final PatientPersistenceService patientPersistenceService;
	private final PatientMessagingService patientMessagingService;

	@Autowired
	public PatientEventHandler(PatientPersistenceService patientPersistenceService,
			PatientMessagingService patientMessagingService) {

		this.patientPersistenceService = patientPersistenceService;
		this.patientMessagingService = patientMessagingService;
	}

	@Override
	public AllPatientsEvent requestAllPatients(RequestAllPatientsEvent requestAllEvent) {
		return patientPersistenceService.requestAllPatients(requestAllEvent);
	}

	@Override
	public PatientDetailsEvent requestPatientDetails(RequestPatientDetailsEvent requestDetailsEvent) {
		return patientPersistenceService.requestPatientDetails(requestDetailsEvent);
	}

	@Override
	public PatientCreatedEvent createPatient(CreatePatientEvent createEvent) {

		PatientCreatedEvent event = patientPersistenceService.createPatient(createEvent);
		if (event.isCreationCompleted()) {
			patientMessagingService.broadcastPatientCreated(event);
		}
		return event;
	}

	@Override
	public PatientDeletedEvent deletePatient(DeletePatientEvent deleteEvent) {

		PatientDeletedEvent event = patientPersistenceService.deletePatient(deleteEvent);
		if (event.isDeletionCompleted()) {
			patientMessagingService.broadcastPatientDeleted(event);
		}
		return event;
	}

	@Override
	public PatientUpdatedEvent updatePatient(UpdatePatientEvent updateEvent) {

		PatientUpdatedEvent event = patientPersistenceService.updatePatient(updateEvent);
		if (event.isUpdateCompleted()) {
			patientMessagingService.broadcastPatientUpdated(event);
		}
		return event;
	}
}
