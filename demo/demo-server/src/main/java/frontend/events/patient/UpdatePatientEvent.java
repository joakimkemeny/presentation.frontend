package frontend.events.patient;

import frontend.events.UpdateEvent;

public class UpdatePatientEvent extends UpdateEvent {

	private final Long patientId;
	private final PatientDetails patientDetails;

	// Constructors

	public UpdatePatientEvent(Long patientId, PatientDetails patientDetails) {

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
