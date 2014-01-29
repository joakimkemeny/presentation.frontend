package frontend.web.domain;

import frontend.events.appointment.AppointmentDetails;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Appointment implements Serializable {

	private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");

	private Long id;
	private String startTime;
	private String endTime;
	private String notes;

	// Helpers

	public AppointmentDetails toAppointmentDetails() {
		return toAppointmentDetails(null);
	}

	public AppointmentDetails toAppointmentDetails(Long id) {

		AppointmentDetails details = new AppointmentDetails();
		BeanUtils.copyProperties(this, details);
		details.setId(id);
		try {
			details.setStartTime(startTime == null ? null : sdf.parse(startTime));
			details.setEndTime(endTime == null ? null : sdf.parse(endTime));
		} catch (ParseException e) {
		}
		return details;
	}

	public static Appointment fromAppointmentDetails(AppointmentDetails details) {

		Appointment appointment = new Appointment();
		BeanUtils.copyProperties(details, appointment);
		appointment.setStartTime(details.getStartTime() == null ? null : sdf.format(details.getStartTime()));
		appointment.setEndTime(details.getEndTime() == null ? null : sdf.format(details.getEndTime()));
		return appointment;
	}

	// Getters / Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
}
