package frontend.core.services;

import frontend.events.patient.*;

public interface PatientService {

	AllPatientsEvent requestAllPatients(RequestAllPatientsEvent requestAllEvent);

	PatientDetailsEvent requestPatientDetails(RequestPatientDetailsEvent requestDetailsEvent);

	PatientCreatedEvent createPatient(CreatePatientEvent createEvent);

	PatientDeletedEvent deletePatient(DeletePatientEvent deleteEvent);

	PatientUpdatedEvent updatePatient(UpdatePatientEvent updateEvent);
}
