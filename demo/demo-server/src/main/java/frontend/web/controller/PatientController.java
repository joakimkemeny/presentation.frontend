package frontend.web.controller;

import frontend.core.services.NoteService;
import frontend.core.services.PatientService;
import frontend.events.note.AllNotesEvent;
import frontend.events.note.NoteDetails;
import frontend.events.note.RequestAllNotesEvent;
import frontend.events.patient.*;
import frontend.web.domain.Note;
import frontend.web.domain.Patient;
import frontend.web.domain.PatientFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.List;

@Controller
public class PatientController {

	@Autowired
	private PatientService patientService;
	@Autowired
	private NoteService noteService;

	@RequestMapping("/patients")
	public String index(Model model, @ModelAttribute("filter") PatientFilter filter) {

		AllPatientsEvent allEvent = patientService.requestAllPatients(new RequestAllPatientsEvent());

		// TODO: Search...

		List<Patient> patients = new ArrayList<>();
		for (PatientDetails details : allEvent.getPatientsDetails()) {
			patients.add(Patient.fromPatientDetails(details));
		}

		model.addAttribute("section", "patients");
		model.addAttribute("patients", patients);

		return "patients/index";
	}

	@RequestMapping("/patients/create")
	public String create(Model model) {

		AllPatientsEvent allEvent = patientService.requestAllPatients(new RequestAllPatientsEvent());

		// TODO: Search...

		List<Patient> patients = new ArrayList<>();
		for (PatientDetails details : allEvent.getPatientsDetails()) {
			patients.add(Patient.fromPatientDetails(details));
		}

		model.addAttribute("section", "patients");
		model.addAttribute("patients", patients);

		return "patients/create";
	}

	@RequestMapping(value = "/patients/create", method = RequestMethod.POST)
	public String create(Model model, @ModelAttribute("patient") Patient patient) {

		PatientCreatedEvent createdEvent =
				patientService.createPatient(new CreatePatientEvent(patient.toPatientDetails()));

		return "redirect:/patients/";
	}

	@RequestMapping("/patients/{id}/edit")
	public String edit(@PathVariable Long id, Model model) {

		PatientDetailsEvent detailsEvent = patientService.requestPatientDetails(new RequestPatientDetailsEvent(id));

		frontend.rest.domain.Patient patient =
				frontend.rest.domain.Patient.fromPatientDetails(detailsEvent.getPatientDetails());

		// TODO: This should obviously not be done here but it's a demo and this is not the most important part.
		List<Note> notes = new ArrayList<>();
		AllNotesEvent allNotesEvent = noteService.requestAllNotes(new RequestAllNotesEvent());
		for (NoteDetails note : allNotesEvent.getNotesDetails()) {
			if (patient.getNotes().contains(note.getId())) {
				notes.add(Note.fromNoteDetails(note));
			}
		}

		model.addAttribute("section", "patients");
		model.addAttribute("patient", patient);
		model.addAttribute("notes", notes);

		return "patients/edit";
	}

	@ModelAttribute("filter")
	private PatientFilter getPatientFilter() {
		return new PatientFilter();
	}

	@ModelAttribute("patient")
	private Patient getPatient() {
		return new Patient();
	}
}
