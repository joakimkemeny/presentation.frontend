package frontend.rest.controller;

import frontend.core.services.PatientService;
import frontend.events.patient.*;
import frontend.rest.domain.Patient;
import frontend.rest.domain.Patients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(method = RequestMethod.GET, value = "/api/patients")
public class PatientQueriesController {

	@Autowired
	private PatientService patientService;

	@RequestMapping
	@ResponseStatus(HttpStatus.OK)
	public Patients getAllPatients() {

		AllPatientsEvent allEvent = patientService.requestAllPatients(new RequestAllPatientsEvent());

		List<Patient> patients = new ArrayList<>();
		for (PatientDetails details : allEvent.getPatientsDetails()) {
			patients.add(Patient.fromPatientDetails(details));
		}

		return new Patients(patients);
	}

	@RequestMapping(value = "/{id}")
	public ResponseEntity<Patient> getPatient(@PathVariable Long id) {

		PatientDetailsEvent detailsEvent = patientService.requestPatientDetails(new RequestPatientDetailsEvent(id));

		if (!detailsEvent.isEntityFound()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Patient patient = Patient.fromPatientDetails(detailsEvent.getPatientDetails());
		return new ResponseEntity<>(patient, HttpStatus.OK);
	}
}
