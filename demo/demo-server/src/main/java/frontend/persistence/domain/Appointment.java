package frontend.persistence.domain;

import frontend.events.appointment.AppointmentDetails;
import org.springframework.beans.BeanUtils;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "APPOINTMENTS")
public class Appointment {

	@Id
	@GeneratedValue
	@Column(name = "APPOINTMENT_ID")
	private Long id;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "START_TIME")
	private Date startTime;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "END_TIME")
	private Date endTime;

	@Column(name = "NOTES")
	private String notes;

	// Helpers

	public AppointmentDetails toAppointmentDetails() {

		AppointmentDetails details = new AppointmentDetails();
		BeanUtils.copyProperties(this, details);

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
