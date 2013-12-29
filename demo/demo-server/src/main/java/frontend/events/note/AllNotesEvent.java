package frontend.events.note;

import frontend.events.ReadEvent;

import java.util.Collections;
import java.util.List;

public class AllNotesEvent extends ReadEvent {

	private final List<NoteDetails> notesDetails;

	// Constructors

	public AllNotesEvent(List<NoteDetails> notesDetails) {
		this.notesDetails = Collections.unmodifiableList(notesDetails);
	}

	// Getters

	public List<NoteDetails> getNotesDetails() {
		return notesDetails;
	}
}
