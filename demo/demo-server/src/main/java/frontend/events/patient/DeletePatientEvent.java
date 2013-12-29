package frontend.events.patient;

import frontend.events.DeleteEvent;

public class DeletePatientEvent extends DeleteEvent {

	private final Long patientId;

	// Constructors

	public DeletePatientEvent(Long patientId) {
		this.patientId = patientId;
	}

	// Getters

	public Long getPatientId() {
		return patientId;
	}
}
