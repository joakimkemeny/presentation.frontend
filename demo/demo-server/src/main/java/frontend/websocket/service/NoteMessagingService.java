package frontend.websocket.service;

import frontend.events.note.NoteCreatedEvent;
import frontend.events.note.NoteDeletedEvent;
import frontend.events.note.NoteUpdatedEvent;

public interface NoteMessagingService {

	void broadcastNoteCreated(NoteCreatedEvent createdEvent);

	void broadcastNoteDeleted(NoteDeletedEvent deletedEvent);

	void broadcastNoteUpdated(NoteUpdatedEvent updatedEvent);
}
