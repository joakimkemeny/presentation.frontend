package frontend.persistence.service;

import frontend.events.appointment.*;
import frontend.persistence.domain.Appointment;
import frontend.persistence.domain.Patient;
import frontend.persistence.repository.AppointmentRepository;
import frontend.persistence.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class AppointmentPersistenceEventHandler implements AppointmentPersistenceService {

	private final AppointmentRepository appointmentRepository;
	private final PatientRepository patientRepository;

	@Autowired
	public AppointmentPersistenceEventHandler(AppointmentRepository appointmentRepository,
			PatientRepository patientRepository) {

		this.appointmentRepository = appointmentRepository;
		this.patientRepository = patientRepository;
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

		Patient patient = patientRepository.findOne(createEvent.getAppointmentDetails().getPatientId());
		// TODO: Return error if patient isn't found.

		Appointment appointment = appointmentRepository
				.save(Appointment.fromAppointmentDetails(createEvent.getAppointmentDetails(), patient));
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

		Patient patient = patientRepository.findOne(updateEvent.getAppointmentDetails().getPatientId());
		// TODO: Return error if patient isn't found.

		if (!appointmentRepository.exists(updateEvent.getAppointmentId())) {
			return AppointmentUpdatedEvent.notFound(updateEvent.getAppointmentId());
		}

		Appointment appointment = appointmentRepository
				.save(Appointment.fromAppointmentDetails(updateEvent.getAppointmentDetails(), patient));
		return new AppointmentUpdatedEvent(appointment.getId(), appointment.toAppointmentDetails());
	}
}
