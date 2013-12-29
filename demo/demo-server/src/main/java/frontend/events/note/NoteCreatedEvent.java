package frontend.events.note;

import frontend.events.CreatedEvent;

public class NoteCreatedEvent extends CreatedEvent {

	private final Long noteId;
	private final NoteDetails noteDetails;

	// Constructors

	public NoteCreatedEvent(Long noteId, NoteDetails noteDetails) {

		super(true);

		this.noteId = noteId;
		this.noteDetails = noteDetails;
	}

	// Getters

	public Long getNoteId() {
		return noteId;
	}

	public NoteDetails getNoteDetails() {
		return noteDetails;
	}
}
