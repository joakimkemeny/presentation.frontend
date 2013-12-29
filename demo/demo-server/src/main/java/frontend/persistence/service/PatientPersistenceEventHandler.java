package frontend.persistence.service;

import frontend.events.patient.*;
import frontend.persistence.domain.Patient;
import frontend.persistence.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PatientPersistenceEventHandler implements PatientPersistenceService {

	private final PatientRepository patientRepository;

	@Autowired
	public PatientPersistenceEventHandler(final PatientRepository patientRepository) {
		this.patientRepository = patientRepository;
	}

	@Override
	public AllPatientsEvent requestAllPatients(RequestAllPatientsEvent requestAllEvent) {

		List<PatientDetails> details = new ArrayList<>();
		for (Patient patient : patientRepository.findAll()) {
			details.add(patient.toPatientDetails());
		}

		return new AllPatientsEvent(details);
	}

	@Override
	public PatientDetailsEvent requestPatientDetails(RequestPatientDetailsEvent requestDetailsEvent) {

		Patient patient = patientRepository.findOne(requestDetailsEvent.getPatientId());

		if (patient == null) {
			return PatientDetailsEvent.notFound(requestDetailsEvent.getPatientId());
		}

		return new PatientDetailsEvent(patient.getId(), patient.toPatientDetails());
	}

	@Override
	public PatientCreatedEvent createPatient(CreatePatientEvent createEvent) {

		Patient patient = patientRepository.save(Patient.fromPatientDetails(createEvent.getPatientDetails()));
		return new PatientCreatedEvent(patient.getId(), patient.toPatientDetails());
	}

	@Override
	public PatientDeletedEvent deletePatient(DeletePatientEvent deleteEvent) {

		Patient patient = patientRepository.findOne(deleteEvent.getPatientId());

		if (patient == null) {
			return PatientDeletedEvent.notFound(deleteEvent.getPatientId());
		}

		patientRepository.delete(deleteEvent.getPatientId());

		return new PatientDeletedEvent(patient.getId(), patient.toPatientDetails());
	}

	@Override
	public PatientUpdatedEvent updatePatient(UpdatePatientEvent updateEvent) {

		if (!patientRepository.exists(updateEvent.getPatientId())) {
			return PatientUpdatedEvent.notFound(updateEvent.getPatientId());
		}

		Patient patient = patientRepository.save(Patient.fromPatientDetails(updateEvent.getPatientDetails()));
		return new PatientUpdatedEvent(patient.getId(), patient.toPatientDetails());
	}
}
