package frontend.core.services;

import frontend.events.appointment.*;

public interface AppointmentService {

	AllAppointmentsEvent requestAllAppointments(RequestAllAppointmentsEvent requestAllEvent);

	AppointmentDetailsEvent requestAppointmentDetails(RequestAppointmentDetailsEvent requestDetailsEvent);

	AppointmentCreatedEvent createAppointment(CreateAppointmentEvent createEvent);

	AppointmentDeletedEvent deleteAppointment(DeleteAppointmentEvent deleteEvent);

	AppointmentUpdatedEvent updateAppointment(UpdateAppointmentEvent updateEvent);
}
