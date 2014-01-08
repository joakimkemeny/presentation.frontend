package frontend.websocket.domain;

import frontend.events.patient.PatientDetails;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.util.List;

public class Patient implements Serializable {

	private Long id;
	private String civicRegNr;
	private String firstName;
	private String lastName;
	private String streetAddress;
	private String zipCode;
	private String city;
	private String phone;
	private String mobile;
	private List<Long> notes;

	// Handlers

	public PatientDetails toPatientDetails() {
		return toPatientDetails(null);
	}

	public PatientDetails toPatientDetails(Long id) {

		PatientDetails details = new PatientDetails();
		BeanUtils.copyProperties(this, details);
		details.setId(id);
		details.setNoteIds(notes);
		return details;
	}

	public static Patient fromPatientDetails(PatientDetails details) {

		Patient patient = new Patient();
		BeanUtils.copyProperties(details, patient);
		patient.setNotes(details.getNoteIds());
		return patient;
	}

	// Getters / Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public List<Long> getNotes() {
		return notes;
	}

	public void setNotes(List<Long> notes) {
		this.notes = notes;
	}
}
