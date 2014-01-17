package frontend.web.domain;

import java.io.Serializable;

public class PatientFilter implements Serializable {

	private String civicRegNr;
	private String firstName;
	private String lastName;
	private String city;

	public String getCivicRegNr() {
		return civicRegNr;
	}

	public void setCivicRegNr(String civicRegNr) {
		this.civicRegNr = civicRegNr;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
}
