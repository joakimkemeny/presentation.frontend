package frontend.events.patient;

import frontend.events.UpdatedEvent;

public class PatientUpdatedEvent extends UpdatedEvent {

	private final Long patientId;
	private final PatientDetails patientDetails;

	// Constructors

	public PatientUpdatedEvent(Long patientId, PatientDetails patientDetails) {
		this(patientId, patientDetails, true, true);
	}

	private PatientUpdatedEvent(Long patientId, PatientDetails patientDetails, boolean entityFound,
			boolean updateCompleted) {

		super(entityFound, updateCompleted);

		this.patientId = patientId;
		this.patientDetails = patientDetails;
	}

	// Helpers

	public static PatientUpdatedEvent updateForbidden(Long patientId, PatientDetails patientDetails) {
		return new PatientUpdatedEvent(patientId, patientDetails, true, false);
	}

	public static PatientUpdatedEvent notFound(Long appointmentId) {
		return new PatientUpdatedEvent(appointmentId, null, false, false);
	}

	// Getters

	public Long getPatientId() {
		return patientId;
	}

	public PatientDetails getPatientDetails() {
		return patientDetails;
	}
}
