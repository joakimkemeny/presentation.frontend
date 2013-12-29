package frontend.events.patient;

import frontend.events.CreatedEvent;

public class PatientCreatedEvent extends CreatedEvent {

	private final Long patientId;
	private final PatientDetails patientDetails;

	// Constructors

	public PatientCreatedEvent(Long patientId, PatientDetails patientDetails) {

		super(true);

		this.patientId = patientId;
		this.patientDetails = patientDetails;
	}

	// Getters

	public Long getPatientId() {
		return patientId;
	}

	public PatientDetails getPatientDetails() {
		return patientDetails;
	}
}
