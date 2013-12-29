package frontend.persistence.domain;

import frontend.events.patient.PatientDetails;
import org.springframework.beans.BeanUtils;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "PATIENTS")
public class Patient {

	@Id
	@GeneratedValue
	@Column(name = "PATIENT_ID")
	private Long id;

	@Column(name = "CIVIC_REG_NR")
	private String civicRegNr;

	@Column(name = "FIRST_NAME")
	private String firstName;

	@Column(name = "LAST_NAME")
	private String lastName;

	@Column(name = "STREET_ADDRESS")
	private String streetAddress;

	@Column(name = "ZIP_CODE")
	private String zipCode;

	@Column(name = "CITY")
	private String city;

	@Column(name = "PHONE")
	private String phone;

	@Column(name = "MOBILE")
	private String mobile;

	@OneToMany(mappedBy = "patient", cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
	private List<Note> notes;

	// Helpers

	public PatientDetails toPatientDetails() {

		PatientDetails details = new PatientDetails();
		BeanUtils.copyProperties(this, details);
		List<Long> noteIds = new ArrayList<>();
		if (notes != null) {
			for (Note note : notes) {
				noteIds.add(note.getId());
			}
		}
		details.setNoteIds(noteIds);

		return details;
	}

	public static Patient fromPatientDetails(PatientDetails details) {
		return Patient.fromPatientDetails(details, null);
	}

	public static Patient fromPatientDetails(PatientDetails details, List<Note> notes) {

		Patient patient = new Patient();
		BeanUtils.copyProperties(details, patient);
		if (notes != null) {
			patient.setNotes(notes);
		}

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

	public List<Note> getNotes() {
		return notes;
	}

	public void setNotes(List<Note> notes) {
		this.notes = notes;
	}
}
