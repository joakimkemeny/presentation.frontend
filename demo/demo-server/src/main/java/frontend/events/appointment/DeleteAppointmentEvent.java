package frontend.events.appointment;

import frontend.events.DeleteEvent;

public class DeleteAppointmentEvent extends DeleteEvent {

	private final Long appointmentId;

	// Constructors

	public DeleteAppointmentEvent(Long appointmentId) {
		this.appointmentId = appointmentId;
	}

	// Getters

	public Long getAppointmentId() {
		return appointmentId;
	}
}
