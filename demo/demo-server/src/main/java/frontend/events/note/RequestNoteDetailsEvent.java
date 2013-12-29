package frontend.events.note;

public class RequestNoteDetailsEvent {

	private final Long noteId;

	// Constructors

	public RequestNoteDetailsEvent(Long noteId) {
		this.noteId = noteId;
	}

	// Getters

	public Long getNoteId() {
		return noteId;
	}
}
