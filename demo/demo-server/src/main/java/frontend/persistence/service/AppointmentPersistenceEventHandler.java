package frontend.persistence.service;

import frontend.events.appointment.*;
import frontend.persistence.domain.Appointment;
import frontend.persistence.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class AppointmentPersistenceEventHandler implements AppointmentPersistenceService {

	private final AppointmentRepository appointmentRepository;

	@Autowired
	public AppointmentPersistenceEventHandler(AppointmentRepository appointmentRepository) {
		this.appointmentRepository = appointmentRepository;
	}

	@Override
	public AllAppointmentsEvent requestAllAppointments(RequestAllAppointmentsEvent requestAllEvent) {

		List<AppointmentDetails> details = new ArrayList<>();
		for (Appointment appointment : appointmentRepository.findAll()) {
			details.add(appointment.toAppointmentDetails());
		}

		return new AllAppointmentsEvent(details);
	}

	@Override
	public AppointmentDetailsEvent requestAppointmentDetails(RequestAppointmentDetailsEvent requestDetailsEvent) {

		Appointment appointment = appointmentRepository.findOne(requestDetailsEvent.getAppointmentId());

		if (appointment == null) {
			return AppointmentDetailsEvent.notFound(requestDetailsEvent.getAppointmentId());
		}

		return new AppointmentDetailsEvent(appointment.getId(), appointment.toAppointmentDetails());
	}

	@Override
	public AppointmentCreatedEvent createAppointment(CreateAppointmentEvent createEvent) {

		Appointment appointment =
				appointmentRepository.save(Appointment.fromAppointmentDetails(createEvent.getAppointmentDetails()));
		return new AppointmentCreatedEvent(appointment.getId(), appointment.toAppointmentDetails());
	}

	@Override
	public AppointmentDeletedEvent deleteAppointment(DeleteAppointmentEvent deleteEvent) {

		Appointment appointment = appointmentRepository.findOne(deleteEvent.getAppointmentId());

		if (appointment == null) {
			return AppointmentDeletedEvent.notFound(deleteEvent.getAppointmentId());
		}

		appointmentRepository.delete(deleteEvent.getAppointmentId());

		return new AppointmentDeletedEvent(appointment.getId(), appointment.toAppointmentDetails());
	}

	@Override
	public AppointmentUpdatedEvent updateAppointment(UpdateAppointmentEvent updateEvent) {

		if (!appointmentRepository.exists(updateEvent.getAppointmentId())) {
			return AppointmentUpdatedEvent.notFound(updateEvent.getAppointmentId());
		}

		Appointment appointment =
				appointmentRepository.save(Appointment.fromAppointmentDetails(updateEvent.getAppointmentDetails()));
		return new AppointmentUpdatedEvent(appointment.getId(), appointment.toAppointmentDetails());
	}
}
