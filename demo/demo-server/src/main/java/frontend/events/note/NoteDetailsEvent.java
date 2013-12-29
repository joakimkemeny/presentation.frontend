package frontend.events.note;

import frontend.events.ReadEvent;

public class NoteDetailsEvent extends ReadEvent {

	private final Long noteId;
	private final NoteDetails noteDetails;
	private final boolean entityFound;

	// Constructors

	public NoteDetailsEvent(Long noteId, NoteDetails noteDetails) {
		this(noteId, noteDetails, true);
	}

	private NoteDetailsEvent(Long noteId, NoteDetails noteDetails, boolean entityFound) {

		this.noteId = noteId;
		this.noteDetails = noteDetails;
		this.entityFound = entityFound;
	}

	// Helpers

	public static NoteDetailsEvent notFound(Long noteId) {
		return new NoteDetailsEvent(noteId, null, false);
	}

	// Getters

	public Long getNoteId() {
		return noteId;
	}

	public NoteDetails getNoteDetails() {
		return noteDetails;
	}

	public boolean isEntityFound() {
		return entityFound;
	}
}
