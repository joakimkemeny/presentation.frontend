package frontend.websocket.service;

import frontend.events.appointment.AppointmentCreatedEvent;
import frontend.events.appointment.AppointmentDeletedEvent;
import frontend.events.appointment.AppointmentUpdatedEvent;

public interface AppointmentMessagingService {

	void broadcastAppointmentCreated(AppointmentCreatedEvent createdEvent);

	void broadcastAppointmentDeleted(AppointmentDeletedEvent deletedEvent);

	void broadcastAppointmentUpdated(AppointmentUpdatedEvent updatedEvent);
}
