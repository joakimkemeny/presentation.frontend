package frontend.rest.domain;

import com.fasterxml.jackson.annotation.JsonRootName;
import frontend.events.appointment.AppointmentDetails;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.util.Date;

@JsonRootName("appointment")
public class Appointment implements Serializable {

	private Long id;
	private Date startTime;
	private Date endTime;
	private String notes;

	// Helpers

	public AppointmentDetails toAppointmentDetails() {
		return toAppointmentDetails(null);
	}

	public AppointmentDetails toAppointmentDetails(Long id) {

		AppointmentDetails details = new AppointmentDetails();
		BeanUtils.copyProperties(this, details);
		details.setId(id);
		return details;
	}

	public static Appointment fromAppointmentDetails(AppointmentDetails details) {

		Appointment appointment = new Appointment();
		BeanUtils.copyProperties(details, appointment);
		return appointment;
	}

	// Getters / Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
}
