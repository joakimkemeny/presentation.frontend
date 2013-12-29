package frontend.events.appointment;

import frontend.events.UpdateEvent;

public class UpdateAppointmentEvent extends UpdateEvent {

	private final Long appointmentId;
	private final AppointmentDetails appointmentDetails;

	// Constructors

	public UpdateAppointmentEvent(Long appointmentId, AppointmentDetails appointmentDetails) {

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
