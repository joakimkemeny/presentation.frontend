package frontend.events.patient;

import frontend.events.ReadEvent;

public class PatientDetailsEvent extends ReadEvent {

	private final Long patientId;
	private final PatientDetails patientDetails;
	private final boolean entityFound;

	// Constructors

	public PatientDetailsEvent(Long patientId, PatientDetails patientDetails) {
		this(patientId, patientDetails, true);
	}

	private PatientDetailsEvent(Long patientId, PatientDetails patientDetails, boolean entityFound) {

		this.patientId = patientId;
		this.patientDetails = patientDetails;
		this.entityFound = entityFound;
	}

	// Helpers

	public static PatientDetailsEvent notFound(Long patientId) {
		return new PatientDetailsEvent(patientId, null, false);
	}

	// Getters

	public Long getPatientId() {
		return patientId;
	}

	public PatientDetails getPatientDetails() {
		return patientDetails;
	}

	public boolean isEntityFound() {
		return entityFound;
	}
}
