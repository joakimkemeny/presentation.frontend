package frontend.events.patient;

import frontend.events.DeletedEvent;

public class PatientDeletedEvent extends DeletedEvent {

	private final Long patientId;
	private final PatientDetails patientDetails;

	// Constructors

	public PatientDeletedEvent(Long patientId, PatientDetails patientDetails) {
		this(patientId, patientDetails, true, true);
	}

	public PatientDeletedEvent(Long patientId, PatientDetails patientDetails, boolean entityFound,
			boolean deletionCompleted) {

		super(entityFound, deletionCompleted);

		this.patientId = patientId;
		this.patientDetails = patientDetails;
	}

	// Helpers

	public static PatientDeletedEvent deletionForbidden(Long patientId, PatientDetails patientDetails) {
		return new PatientDeletedEvent(patientId, patientDetails, true, false);
	}

	public static PatientDeletedEvent notFound(Long patientId) {
		return new PatientDeletedEvent(patientId, null, false, false);
	}

	// Getters

	public Long getPatientId() {
		return patientId;
	}

	public PatientDetails getPatientDetails() {
		return patientDetails;
	}
}
