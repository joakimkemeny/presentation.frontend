package frontend.events.appointment;

public class RequestAppointmentDetailsEvent {

	private final Long appointmentId;

	// Constructors

	public RequestAppointmentDetailsEvent(Long appointmentId) {
		this.appointmentId = appointmentId;
	}

	// Getters

	public Long getAppointmentId() {
		return appointmentId;
	}
}
