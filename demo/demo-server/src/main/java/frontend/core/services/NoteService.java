package frontend.core.services;

import frontend.events.note.*;

public interface NoteService {

	AllNotesEvent requestAllNotes(RequestAllNotesEvent requestAllEvent);

	NoteDetailsEvent requestNoteDetails(RequestNoteDetailsEvent requestDetailsEvent);

	NoteCreatedEvent createNote(CreateNoteEvent createEvent);

	NoteDeletedEvent deleteNote(DeleteNoteEvent deleteEvent);

	NoteUpdatedEvent updateNote(UpdateNoteEvent updateEvent);
}
