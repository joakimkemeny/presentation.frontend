package frontend.rest.domain;

import com.fasterxml.jackson.annotation.JsonRootName;

import java.util.ArrayList;
import java.util.List;

@JsonRootName("notes")
public class Notes extends ArrayList<Note> {

	public Notes(List<Note> notes) {
		addAll(notes);
	}
}
