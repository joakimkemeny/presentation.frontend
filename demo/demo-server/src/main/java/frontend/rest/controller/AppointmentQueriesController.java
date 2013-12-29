package frontend.rest.controller;

import frontend.core.services.AppointmentService;
import frontend.events.appointment.*;
import frontend.rest.domain.Appointment;
import frontend.rest.domain.Appointments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(method = RequestMethod.GET, value = "/api/appointments")
public class AppointmentQueriesController {

	@Autowired
	private AppointmentService appointmentService;

	@RequestMapping
	@ResponseStatus(HttpStatus.OK)
	public Appointments getAllAppointments() {

		AllAppointmentsEvent allEvent = appointmentService.requestAllAppointments(new RequestAllAppointmentsEvent());

		List<Appointment> appointments = new ArrayList<>();
		for (AppointmentDetails details : allEvent.getAppointmentsDetails()) {
			appointments.add(Appointment.fromAppointmentDetails(details));
		}

		return new Appointments(appointments);
	}

	@RequestMapping(value = "/{id}")
	public ResponseEntity<Appointment> getAppointment(@PathVariable Long id) {

		AppointmentDetailsEvent detailsEvent =
				appointmentService.requestAppointmentDetails(new RequestAppointmentDetailsEvent(id));

		if (!detailsEvent.isEntityFound()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Appointment appointment = Appointment.fromAppointmentDetails(detailsEvent.getAppointmentDetails());
		return new ResponseEntity<>(appointment, HttpStatus.OK);
	}
}
