package frontend.events.appointment;

import frontend.events.UpdatedEvent;

public class AppointmentUpdatedEvent extends UpdatedEvent {

	private final Long appointmentId;
	private final AppointmentDetails appointmentDetails;

	// Constructors

	public AppointmentUpdatedEvent(Long appointmentId, AppointmentDetails appointmentDetails) {
		this(appointmentId, appointmentDetails, true, true);
	}

	private AppointmentUpdatedEvent(Long appointmentId, AppointmentDetails appointmentDetails, boolean entityFound,
			boolean updateCompleted) {

		super(entityFound, updateCompleted);

		this.appointmentId = appointmentId;
		this.appointmentDetails = appointmentDetails;
	}

	// Helpers

	public static AppointmentUpdatedEvent updateForbidden(Long appointmentId, AppointmentDetails appointmentDetails) {
		return new AppointmentUpdatedEvent(appointmentId, appointmentDetails, true, false);
	}

	public static AppointmentUpdatedEvent notFound(Long appointmentId) {
		return new AppointmentUpdatedEvent(appointmentId, null, false, false);
	}

	// Getters

	public Long getAppointmentId() {
		return appointmentId;
	}

	public AppointmentDetails getAppointmentDetails() {
		return appointmentDetails;
	}
}
