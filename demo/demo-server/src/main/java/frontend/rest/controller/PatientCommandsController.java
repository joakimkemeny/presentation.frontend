package frontend.rest.controller;

import frontend.core.services.EcgService;
import frontend.core.services.PatientService;
import frontend.events.patient.*;
import frontend.rest.domain.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/patients")
public class PatientCommandsController {

	@Autowired
	private PatientService patientService;
	@Autowired
	private EcgService ecgService;

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Patient> createPatient(@RequestBody Patient patient, UriComponentsBuilder builder) {

		PatientCreatedEvent createdEvent =
				patientService.createPatient(new CreatePatientEvent(patient.toPatientDetails()));

		Patient newPatient = Patient.fromPatientDetails(createdEvent.getPatientDetails());

		if (!createdEvent.isCreationCompleted()) {
			return new ResponseEntity<>(newPatient, HttpStatus.FORBIDDEN);
		}

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(
				builder.path("/api/patients/{id}").buildAndExpand(createdEvent.getPatientId().toString()).toUri());

		return new ResponseEntity<>(newPatient, headers, HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
	public ResponseEntity<Patient> deletePatient(@PathVariable Long id) {

		PatientDeletedEvent deletedEvent = patientService.deletePatient(new DeletePatientEvent(id));

		if (!deletedEvent.isEntityFound()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Patient deletedPatient = Patient.fromPatientDetails(deletedEvent.getPatientDetails());

		if (!deletedEvent.isDeletionCompleted()) {
			return new ResponseEntity<>(deletedPatient, HttpStatus.FORBIDDEN);
		}

		return new ResponseEntity<>(deletedPatient, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable Long id, @RequestBody Patient patient) {

		PatientUpdatedEvent updatedEvent =
				patientService.updatePatient(new UpdatePatientEvent(id, patient.toPatientDetails(id)));

		if (!updatedEvent.isEntityFound()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Patient updatedPatient = Patient.fromPatientDetails(updatedEvent.getPatientDetails());

		if (!updatedEvent.isUpdateCompleted()) {
			return new ResponseEntity<>(updatedPatient, HttpStatus.FORBIDDEN);
		}

		return new ResponseEntity<>(updatedPatient, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/startecg")
	public void startEcg() {
		ecgService.startRead();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/stopecg")
	public void stopEcg() {
		ecgService.stopRead();
	}
}
