package frontend.events.appointment;

import frontend.events.ReadEvent;

public class AppointmentDetailsEvent extends ReadEvent {

	private final Long appointmentId;
	private final AppointmentDetails appointmentDetails;
	private final boolean entityFound;

	// Constructors

	public AppointmentDetailsEvent(Long appointmentId, AppointmentDetails appointmentDetails) {
		this(appointmentId, appointmentDetails, true);
	}

	private AppointmentDetailsEvent(Long appointmentId, AppointmentDetails appointmentDetails, boolean entityFound) {

		this.appointmentId = appointmentId;
		this.appointmentDetails = appointmentDetails;
		this.entityFound = entityFound;
	}

	// Helpers

	public static AppointmentDetailsEvent notFound(Long appointmentId) {
		return new AppointmentDetailsEvent(appointmentId, null, false);
	}

	// Getters

	public Long getAppointmentId() {
		return appointmentId;
	}

	public AppointmentDetails getAppointmentDetails() {
		return appointmentDetails;
	}

	public boolean isEntityFound() {
		return entityFound;
	}
}
