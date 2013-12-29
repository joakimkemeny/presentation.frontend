package frontend.events.patient;

import frontend.events.CreateEvent;

public class CreatePatientEvent extends CreateEvent {

	private final PatientDetails patientDetails;

	// Constructors

	public CreatePatientEvent(PatientDetails patientDetails) {
		this.patientDetails = patientDetails;
	}

	// Getters

	public PatientDetails getPatientDetails() {
		return patientDetails;
	}
}
