package frontend.rest.controller;

import frontend.core.services.NoteService;
import frontend.events.note.*;
import frontend.rest.domain.Note;
import frontend.rest.domain.Notes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(method = RequestMethod.GET, value = "/api/notes")
public class NoteQueriesController {

	@Autowired
	private NoteService noteService;

	@RequestMapping
	@ResponseStatus(HttpStatus.OK)
	public Notes getAllNotes() {

		AllNotesEvent allEvent = noteService.requestAllNotes(new RequestAllNotesEvent());

		List<Note> notes = new ArrayList<>();
		for (NoteDetails details : allEvent.getNotesDetails()) {
			notes.add(Note.fromNoteDetails(details));
		}

		return new Notes(notes);
	}

	@RequestMapping(value = "/{id}")
	public ResponseEntity<Note> getNote(@PathVariable Long id) {

		NoteDetailsEvent detailsEvent = noteService.requestNoteDetails(new RequestNoteDetailsEvent(id));

		if (!detailsEvent.isEntityFound()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Note note = Note.fromNoteDetails(detailsEvent.getNoteDetails());
		return new ResponseEntity<>(note, HttpStatus.OK);
	}
}
