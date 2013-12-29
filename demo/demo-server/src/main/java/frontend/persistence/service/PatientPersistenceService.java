package frontend.persistence.service;

import frontend.events.patient.*;

public interface PatientPersistenceService {

	AllPatientsEvent requestAllPatients(RequestAllPatientsEvent requestAllEvent);

	PatientDetailsEvent requestPatientDetails(RequestPatientDetailsEvent requestDetailsEvent);

	PatientCreatedEvent createPatient(CreatePatientEvent createEvent);

	PatientDeletedEvent deletePatient(DeletePatientEvent deleteEvent);

	PatientUpdatedEvent updatePatient(UpdatePatientEvent updateEvent);
}
