package frontend.persistence.service;

import frontend.events.appointment.*;

public interface AppointmentPersistenceService {

	AllAppointmentsEvent requestAllAppointments(RequestAllAppointmentsEvent requestAllEvent);

	AppointmentDetailsEvent requestAppointmentDetails(RequestAppointmentDetailsEvent requestDetailsEvent);

	AppointmentCreatedEvent createAppointment(CreateAppointmentEvent createEvent);

	AppointmentDeletedEvent deleteAppointment(DeleteAppointmentEvent deleteEvent);

	AppointmentUpdatedEvent updateAppointment(UpdateAppointmentEvent updateEvent);
}
