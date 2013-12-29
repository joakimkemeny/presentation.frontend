package frontend.rest.controller;

import frontend.core.services.NoteService;
import frontend.events.note.*;
import frontend.rest.domain.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/notes")
public class NoteCommandsController {

	@Autowired
	private NoteService noteService;

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Note> createNote(@RequestBody Note note, UriComponentsBuilder builder) {

		NoteCreatedEvent createdEvent = noteService.createNote(new CreateNoteEvent(note.toNoteDetails()));

		Note newNote = Note.fromNoteDetails(createdEvent.getNoteDetails());

		if (!createdEvent.isCreationCompleted()) {
			return new ResponseEntity<>(newNote, HttpStatus.FORBIDDEN);
		}

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/api/notes/{id}").buildAndExpand(createdEvent.getNoteId().toString()).
				toUri());

		return new ResponseEntity<>(newNote, headers, HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
	public ResponseEntity<Note> deleteNote(@PathVariable Long id) {

		NoteDeletedEvent deletedEvent = noteService.deleteNote(new DeleteNoteEvent(id));

		if (!deletedEvent.isEntityFound()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Note deletedNote = Note.fromNoteDetails(deletedEvent.getNoteDetails());

		if (deletedEvent.isDeletionCompleted()) {
			return new ResponseEntity<>(deletedNote, HttpStatus.FORBIDDEN);
		}

		return new ResponseEntity<>(deletedNote, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note note) {

		NoteUpdatedEvent updatedEvent = noteService.updateNote(new UpdateNoteEvent(id, note.toNoteDetails()));

		if (!updatedEvent.isEntityFound()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Note updatedNote = Note.fromNoteDetails(updatedEvent.getNoteDetails());

		if (!updatedEvent.isUpdateCompleted()) {
			return new ResponseEntity<>(updatedNote, HttpStatus.FORBIDDEN);
		}

		return new ResponseEntity<>(updatedNote, HttpStatus.OK);
	}
}
