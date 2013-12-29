package frontend.rest.domain;

import com.fasterxml.jackson.annotation.JsonRootName;

import java.util.ArrayList;
import java.util.List;

@JsonRootName("patients")
public class Patients extends ArrayList<Patient> {

	public Patients(List<Patient> patients) {
		addAll(patients);
	}
}
