package frontend.persistence.service;

import frontend.events.note.*;

public interface NotePersistenceService {

	AllNotesEvent requestAllNotes(RequestAllNotesEvent requestAllEvent);

	NoteDetailsEvent requestNoteDetails(RequestNoteDetailsEvent requestDetailsEvent);

	NoteCreatedEvent createNote(CreateNoteEvent createEvent);

	NoteDeletedEvent deleteNote(DeleteNoteEvent deleteEvent);

	NoteUpdatedEvent updateNote(UpdateNoteEvent updateEvent);
}
