package frontend.web.controller;

import frontend.core.services.NoteService;
import frontend.core.services.PatientService;
import frontend.events.note.AllNotesEvent;
import frontend.events.note.NoteDetails;
import frontend.events.note.RequestAllNotesEvent;
import frontend.events.patient.PatientDetailsEvent;
import frontend.events.patient.RequestPatientDetailsEvent;
import frontend.rest.domain.Patient;
import frontend.web.domain.Note;
import frontend.web.domain.NoteFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class NoteController {

	@Autowired
	private PatientService patientService;
	@Autowired
	private NoteService noteService;

	@RequestMapping("/patients/{patientId}/notes")
	public String index(@PathVariable Long patientId, Model model, @ModelAttribute("filter") NoteFilter filter) {

		PatientDetailsEvent detailsEvent =
				patientService.requestPatientDetails(new RequestPatientDetailsEvent(patientId));

		Patient patient = Patient.fromPatientDetails(detailsEvent.getPatientDetails());

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

		return "notes/index";
	}

	@RequestMapping("/patients/{patientId}/notes/create")
	public String create(@PathVariable Long patientId, Model model) {
		model.addAttribute("section", "patients");
		return "notes/create";
	}

	@RequestMapping("/patients/{patientId}/notes/{id}/edit")
	public String edit(@PathVariable Long patientId, @PathVariable Long id, Model model) {
		model.addAttribute("section", "patients");
		return "notes/edit";
	}

	@ModelAttribute("filter")
	private NoteFilter getNoteFilter() {
		return new NoteFilter();
	}
}
