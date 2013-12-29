package frontend.events.note;

import frontend.events.UpdatedEvent;

public class NoteUpdatedEvent extends UpdatedEvent {

	private final Long noteId;
	private final NoteDetails noteDetails;

	// Constructors

	public NoteUpdatedEvent(Long noteId, NoteDetails noteDetails) {
		this(noteId, noteDetails, true, true);
	}

	private NoteUpdatedEvent(Long noteId, NoteDetails noteDetails, boolean entityFound, boolean updateCompleted) {

		super(entityFound, updateCompleted);

		this.noteId = noteId;
		this.noteDetails = noteDetails;
	}

	// Helpers

	public static NoteUpdatedEvent updateForbidden(Long noteId, NoteDetails noteDetails) {
		return new NoteUpdatedEvent(noteId, noteDetails, true, false);
	}

	public static NoteUpdatedEvent notFound(Long noteId) {
		return new NoteUpdatedEvent(noteId, null, false, false);
	}

	// Getters

	public Long getNoteId() {
		return noteId;
	}

	public NoteDetails getNoteDetails() {
		return noteDetails;
	}
}
