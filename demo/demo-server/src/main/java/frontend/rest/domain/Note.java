package frontend.rest.domain;

import com.fasterxml.jackson.annotation.JsonRootName;
import frontend.events.note.NoteDetails;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.util.Date;

@JsonRootName("note")
public class Note implements Serializable {

	private Long id;
	private Date createdTime;
	private Long patient;
	private String type;
	private String text;
	private String doctor;

	// Handlers

	public NoteDetails toNoteDetails() {

		NoteDetails details = new NoteDetails();
		BeanUtils.copyProperties(this, details);
		details.setPatientId(this.patient);
		details.setTypeId(this.type);
		return details;
	}

	public static Note fromNoteDetails(NoteDetails details) {

		Note note = new Note();
		BeanUtils.copyProperties(details, note);
		note.setPatient(details.getPatientId());
		note.setType(details.getTypeId());
		return note;
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

	public Long getPatient() {
		return patient;
	}

	public void setPatient(Long patient) {
		this.patient = patient;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
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
