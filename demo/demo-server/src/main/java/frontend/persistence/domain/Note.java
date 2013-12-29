package frontend.persistence.domain;

import frontend.events.note.NoteDetails;
import org.springframework.beans.BeanUtils;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "NOTES")
public class Note {

	@Id
	@GeneratedValue
	@Column(name = "NOTE_ID")
	private Long id;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATED_TIME")
	private Date createdTime;

	@ManyToOne
	@JoinColumn(name = "FK_PATIENT")
	private Patient patient;

	@Enumerated(EnumType.STRING)
	@Column(name = "TYPE")
	private NoteType type;

	@Column(name = "TEXT")
	private String text;

	@Column(name = "DOCTOR")
	private String doctor;

	// Helpers

	public NoteDetails toNoteDetails() {

		NoteDetails details = new NoteDetails();
		BeanUtils.copyProperties(this, details);
		details.setPatientId(patient.getId());
		details.setTypeId(type.toString());

		return details;
	}

	public static Note fromNoteDetails(NoteDetails details, Patient patient) {

		Note note = new Note();
		BeanUtils.copyProperties(details, note);
		note.patient = patient;
		note.type = NoteType.valueOf(details.getTypeId());

		return note;
	}


	@PrePersist
	void createdTime() {
		createdTime = new Date();
	}

	// Getters / Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(Date createdTime) {
		this.createdTime = createdTime;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public NoteType getType() {
		return type;
	}

	public void setType(NoteType type) {
		this.type = type;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getDoctor() {
		return doctor;
	}

	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
}
