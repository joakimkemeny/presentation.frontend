package frontend.events.appointment;

import frontend.events.CreateEvent;

public class CreateAppointmentEvent extends CreateEvent {

	private final AppointmentDetails appointmentDetails;

	// Constructors

	public CreateAppointmentEvent(AppointmentDetails appointmentDetails) {
		this.appointmentDetails = appointmentDetails;
	}

	// Getters

	public AppointmentDetails getAppointmentDetails() {
		return appointmentDetails;
	}
}
