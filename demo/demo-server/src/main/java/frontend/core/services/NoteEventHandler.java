package frontend.core.services;

import frontend.events.note.*;
import frontend.events.patient.PatientDetailsEvent;
import frontend.events.patient.PatientUpdatedEvent;
import frontend.events.patient.RequestPatientDetailsEvent;
import frontend.persistence.service.NotePersistenceService;
import frontend.persistence.service.PatientPersistenceService;
import frontend.websocket.service.NoteMessagingService;
import frontend.websocket.service.PatientMessagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NoteEventHandler implements NoteService {

	private final NotePersistenceService notePersistenceService;
	private final NoteMessagingService noteMessagingService;

	@Autowired
	public NoteEventHandler(NotePersistenceService notePersistenceService, NoteMessagingService noteMessagingService) {

		this.notePersistenceService = notePersistenceService;
		this.noteMessagingService = noteMessagingService;
	}

	@Override
	public AllNotesEvent requestAllNotes(RequestAllNotesEvent requestAllEvent) {
		return notePersistenceService.requestAllNotes(requestAllEvent);
	}

	@Override
	public NoteDetailsEvent requestNoteDetails(RequestNoteDetailsEvent requestDetailsEvent) {
		return notePersistenceService.requestNoteDetails(requestDetailsEvent);
	}

	@Override
	public NoteCreatedEvent createNote(CreateNoteEvent createEvent) {

		NoteCreatedEvent event = notePersistenceService.createNote(createEvent);
		if (event.isCreationCompleted()) {
			noteMessagingService.broadcastNoteCreated(event);
		}
		return event;
	}

	@Override
	public NoteDeletedEvent deleteNote(DeleteNoteEvent deleteEvent) {

		NoteDeletedEvent event = notePersistenceService.deleteNote(deleteEvent);
		if (event.isDeletionCompleted()) {
			noteMessagingService.broadcastNoteDeleted(event);
		}
		return event;
	}

	@Override
	public NoteUpdatedEvent updateNote(UpdateNoteEvent updateEvent) {

		NoteUpdatedEvent event = notePersistenceService.updateNote(updateEvent);
		if (event.isUpdateCompleted()) {
			noteMessagingService.broadcastNoteUpdated(event);
		}
		return event;
	}
}
