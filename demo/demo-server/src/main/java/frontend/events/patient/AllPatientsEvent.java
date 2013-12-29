package frontend.events.patient;

import frontend.events.ReadEvent;

import java.util.Collections;
import java.util.List;

public class AllPatientsEvent extends ReadEvent {

	private final List<PatientDetails> patientsDetails;

	// Constructors

	public AllPatientsEvent(List<PatientDetails> patientsDetails) {
		this.patientsDetails = Collections.unmodifiableList(patientsDetails);
	}

	// Getters

	public List<PatientDetails> getPatientsDetails() {
		return patientsDetails;
	}
}
