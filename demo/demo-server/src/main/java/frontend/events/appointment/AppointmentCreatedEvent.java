package frontend.events.appointment;

import frontend.events.CreatedEvent;

public class AppointmentCreatedEvent extends CreatedEvent {

	private final Long appointmentId;
	private final AppointmentDetails appointmentDetails;

	// Constructors

	public AppointmentCreatedEvent(Long appointmentId, AppointmentDetails appointmentDetails) {

		super(true);

		this.appointmentId = appointmentId;
		this.appointmentDetails = appointmentDetails;
	}

	// Getters

	public Long getAppointmentId() {
		return appointmentId;
	}

	public AppointmentDetails getAppointmentDetails() {
		return appointmentDetails;
	}
}
