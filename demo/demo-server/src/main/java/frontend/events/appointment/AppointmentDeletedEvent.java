package frontend.events.appointment;

import frontend.events.DeletedEvent;

public class AppointmentDeletedEvent extends DeletedEvent {

	private final Long appointmentId;
	private final AppointmentDetails appointmentDetails;

	// Constructors

	public AppointmentDeletedEvent(Long appointmentId, AppointmentDetails appointmentDetails) {
		this(appointmentId, appointmentDetails, true, true);
	}

	private AppointmentDeletedEvent(Long appointmentId, AppointmentDetails appointmentDetails, boolean entityFound,
			boolean deletionCompleted) {

		super(entityFound, deletionCompleted);

		this.appointmentId = appointmentId;
		this.appointmentDetails = appointmentDetails;
	}

	// Helpers

	public static AppointmentDeletedEvent deletionForbidden(Long appointmentId, AppointmentDetails appointmentDetails) {
		return new AppointmentDeletedEvent(appointmentId, appointmentDetails, true, false);
	}

	public static AppointmentDeletedEvent notFound(Long appointmentId) {
		return new AppointmentDeletedEvent(appointmentId, null, false, false);
	}

	// Getters

	public Long getAppointmentId() {
		return appointmentId;
	}

	public AppointmentDetails getAppointmentDetails() {
		return appointmentDetails;
	}
}
