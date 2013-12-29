package frontend.events.appointment;

import frontend.events.ReadEvent;

import java.util.Collections;
import java.util.List;

public class AllAppointmentsEvent extends ReadEvent {

	private final List<AppointmentDetails> appointmentsDetails;

	// Constructors

	public AllAppointmentsEvent(List<AppointmentDetails> appointmentsDetails) {
		this.appointmentsDetails = Collections.unmodifiableList(appointmentsDetails);
	}

	// Getters

	public List<AppointmentDetails> getAppointmentsDetails() {
		return appointmentsDetails;
	}
}
