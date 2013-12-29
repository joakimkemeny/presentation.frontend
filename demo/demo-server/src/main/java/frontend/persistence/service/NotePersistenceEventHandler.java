package frontend.persistence.service;

import frontend.events.note.*;
import frontend.persistence.domain.Note;
import frontend.persistence.domain.Patient;
import frontend.persistence.repository.NoteRepository;
import frontend.persistence.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class NotePersistenceEventHandler implements NotePersistenceService {

	private final NoteRepository noteRepository;
	private final PatientRepository patientRepository;

	@Autowired
	public NotePersistenceEventHandler(final NoteRepository noteRepository, final PatientRepository patientRepository) {

		this.noteRepository = noteRepository;
		this.patientRepository = patientRepository;
	}

	@Override
	public AllNotesEvent requestAllNotes(RequestAllNotesEvent requestAllEvent) {

		List<NoteDetails> details = new ArrayList<>();
		for (Note note : noteRepository.findAll()) {
			details.add(note.toNoteDetails());
		}

		return new AllNotesEvent(details);
	}

	@Override
	public NoteDetailsEvent requestNoteDetails(RequestNoteDetailsEvent requestDetailsEvent) {

		Note note = noteRepository.findOne(requestDetailsEvent.getNoteId());

		if (note == null) {
			return NoteDetailsEvent.notFound(requestDetailsEvent.getNoteId());
		}

		return new NoteDetailsEvent(note.getId(), note.toNoteDetails());
	}

	@Override
	public NoteCreatedEvent createNote(CreateNoteEvent createEvent) {

		Patient patient = patientRepository.findOne(createEvent.getNoteDetails().getPatientId());
		// TODO: Return error if patient isn't found.

		Note note = noteRepository.save(Note.fromNoteDetails(createEvent.getNoteDetails(), patient));
		return new NoteCreatedEvent(note.getId(), note.toNoteDetails());
	}

	@Override
	public NoteDeletedEvent deleteNote(DeleteNoteEvent deleteEvent) {

		Note note = noteRepository.findOne(deleteEvent.getNoteId());

		if (note == null) {
			return NoteDeletedEvent.notFound(deleteEvent.getNoteId());
		}

		noteRepository.delete(deleteEvent.getNoteId());

		return new NoteDeletedEvent(note.getId(), note.toNoteDetails());
	}

	@Override
	public NoteUpdatedEvent updateNote(UpdateNoteEvent updateEvent) {

		Patient patient = patientRepository.findOne(updateEvent.getNoteDetails().getPatientId());
		// TODO: Return error if patient isn't found.

		if (!noteRepository.exists(updateEvent.getNoteId())) {
			return NoteUpdatedEvent.notFound(updateEvent.getNoteId());
		}

		Note note = noteRepository.save(Note.fromNoteDetails(updateEvent.getNoteDetails(), patient));
		return new NoteUpdatedEvent(note.getId(), note.toNoteDetails());
	}
}
