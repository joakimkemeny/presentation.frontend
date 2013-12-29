package frontend.events.note;

import frontend.events.CreateEvent;

public class CreateNoteEvent extends CreateEvent {

	private final NoteDetails noteDetails;

	// Constructors

	public CreateNoteEvent(NoteDetails noteDetails) {
		this.noteDetails = noteDetails;
	}

	// Getters

	public NoteDetails getNoteDetails() {
		return noteDetails;
	}
}
