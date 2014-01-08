package frontend.rest.controller;

import frontend.core.services.AppointmentService;
import frontend.events.appointment.*;
import frontend.rest.domain.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentCommandsController {

	@Autowired
	private AppointmentService appointmentService;

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment,
			UriComponentsBuilder builder) {

		AppointmentCreatedEvent createdEvent =
				appointmentService.createAppointment(new CreateAppointmentEvent(appointment.toAppointmentDetails()));

		Appointment newAppointment = Appointment.fromAppointmentDetails(createdEvent.getAppointmentDetails());

		if (!createdEvent.isCreationCompleted()) {
			return new ResponseEntity<>(newAppointment, HttpStatus.FORBIDDEN);
		}

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(
				builder.path("/api/appointments/{id}").buildAndExpand(createdEvent.getAppointmentId().toString()).
						toUri());

		return new ResponseEntity<>(newAppointment, headers, HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
	public ResponseEntity<Appointment> deleteAppointment(@PathVariable Long id) {

		AppointmentDeletedEvent deletedEvent = appointmentService.deleteAppointment(new DeleteAppointmentEvent(id));

		if (!deletedEvent.isEntityFound()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Appointment deletedAppointment = Appointment.fromAppointmentDetails(deletedEvent.getAppointmentDetails());

		if (deletedEvent.isDeletionCompleted()) {
			return new ResponseEntity<>(deletedAppointment, HttpStatus.FORBIDDEN);
		}

		return new ResponseEntity<>(deletedAppointment, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public ResponseEntity<Appointment> updateAppointment(@PathVariable Long id, @RequestBody Appointment appointment) {

		AppointmentUpdatedEvent updatedEvent = appointmentService
				.updateAppointment(new UpdateAppointmentEvent(id, appointment.toAppointmentDetails(id)));

		if (!updatedEvent.isEntityFound()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		Appointment updatedAppointment = Appointment.fromAppointmentDetails(updatedEvent.getAppointmentDetails());

		if (!updatedEvent.isUpdateCompleted()) {
			return new ResponseEntity<>(updatedAppointment, HttpStatus.FORBIDDEN);
		}

		return new ResponseEntity<>(updatedAppointment, HttpStatus.OK);
	}
}
