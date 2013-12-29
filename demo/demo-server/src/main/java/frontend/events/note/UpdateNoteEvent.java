package frontend.events.note;

import frontend.events.UpdateEvent;

public class UpdateNoteEvent extends UpdateEvent {

	private final Long noteId;
	private final NoteDetails noteDetails;

	// Constructors

	public UpdateNoteEvent(Long noteId, NoteDetails noteDetails) {

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
