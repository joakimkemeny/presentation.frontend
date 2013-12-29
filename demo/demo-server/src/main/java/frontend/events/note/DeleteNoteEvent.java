package frontend.events.note;

import frontend.events.DeleteEvent;

public class DeleteNoteEvent extends DeleteEvent {

	private final Long noteId;

	// Constructors

	public DeleteNoteEvent(Long noteId) {
		this.noteId = noteId;
	}

	// Getters

	public Long getNoteId() {
		return noteId;
	}
}
