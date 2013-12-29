package frontend.events.patient;

public class RequestPatientDetailsEvent {

	private final Long patientId;

	// Constructors

	public RequestPatientDetailsEvent(Long patientId) {
		this.patientId = patientId;
	}

	// Getters

	public Long getPatientId() {
		return patientId;
	}
}
