package frontend.events.note;

import frontend.events.DeletedEvent;

public class NoteDeletedEvent extends DeletedEvent {

	private final Long noteId;
	private final NoteDetails noteDetails;

	// Constructors

	public NoteDeletedEvent(Long noteId, NoteDetails noteDetails) {
		this(noteId, noteDetails, true, true);
	}

	private NoteDeletedEvent(Long noteId, NoteDetails noteDetails, boolean entityFound, boolean deletionCompleted) {

		super(entityFound, deletionCompleted);

		this.noteId = noteId;
		this.noteDetails = noteDetails;
	}

	// Helpers

	public static NoteDeletedEvent deletionForbidden(Long noteId, NoteDetails noteDetails) {
		return new NoteDeletedEvent(noteId, noteDetails, true, false);
	}

	public static NoteDeletedEvent notFound(Long noteId) {
		return new NoteDeletedEvent(noteId, null, false, false);
	}

	// Getters

	public Long getNoteId() {
		return noteId;
	}

	public NoteDetails getNoteDetails() {
		return noteDetails;
	}
}
