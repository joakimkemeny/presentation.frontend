package frontend.core.services;

import frontend.events.appointment.*;
import frontend.persistence.service.AppointmentPersistenceService;
import frontend.websocket.service.AppointmentMessagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AppointmentEventHandler implements AppointmentService {

	private final AppointmentPersistenceService appointmentPersistenceService;
	private final AppointmentMessagingService appointmentMessagingService;

	@Autowired
	public AppointmentEventHandler(AppointmentPersistenceService appointmentPersistenceService,
			AppointmentMessagingService appointmentMessagingService) {

		this.appointmentPersistenceService = appointmentPersistenceService;
		this.appointmentMessagingService = appointmentMessagingService;
	}

	@Override
	public AllAppointmentsEvent requestAllAppointments(RequestAllAppointmentsEvent requestAllEvent) {
		return appointmentPersistenceService.requestAllAppointments(requestAllEvent);
	}

	@Override
	public AppointmentDetailsEvent requestAppointmentDetails(RequestAppointmentDetailsEvent requestDetailsEvent) {
		return appointmentPersistenceService.requestAppointmentDetails(requestDetailsEvent);
	}

	@Override
	public AppointmentCreatedEvent createAppointment(CreateAppointmentEvent createEvent) {

		AppointmentCreatedEvent event = appointmentPersistenceService.createAppointment(createEvent);
		if (event.isCreationCompleted()) {
			appointmentMessagingService.broadcastAppointmentCreated(event);
		}
		return event;
	}

	@Override
	public AppointmentDeletedEvent deleteAppointment(DeleteAppointmentEvent deleteEvent) {

		AppointmentDeletedEvent event = appointmentPersistenceService.deleteAppointment(deleteEvent);
		if (event.isDeletionCompleted()) {
			appointmentMessagingService.broadcastAppointmentDeleted(event);
		}
		return event;
	}

	@Override
	public AppointmentUpdatedEvent updateAppointment(UpdateAppointmentEvent updateEvent) {

		AppointmentUpdatedEvent event = appointmentPersistenceService.updateAppointment(updateEvent);
		if (event.isUpdateCompleted()) {
			appointmentMessagingService.broadcastAppointmentUpdated(event);
		}
		return event;
	}
}
