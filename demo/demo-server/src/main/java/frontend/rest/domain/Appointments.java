package frontend.rest.domain;

import com.fasterxml.jackson.annotation.JsonRootName;

import java.util.ArrayList;
import java.util.List;

@JsonRootName("appointments")
public class Appointments extends ArrayList<Appointment> {

	public Appointments(List<Appointment> appointments) {
		addAll(appointments);
	}
}
