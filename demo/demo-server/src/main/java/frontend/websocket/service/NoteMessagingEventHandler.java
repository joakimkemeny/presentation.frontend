package frontend.websocket.service;

import frontend.events.note.NoteCreatedEvent;
import frontend.events.note.NoteDeletedEvent;
import frontend.events.note.NoteUpdatedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Component;

@Component
public class NoteMessagingEventHandler implements NoteMessagingService {

	private final SimpMessageSendingOperations messagingTemplate;

	@Autowired
	public NoteMessagingEventHandler(SimpMessageSendingOperations messagingTemplate) {
		this.messagingTemplate = messagingTemplate;
	}

	@Override
	public void broadcastNoteCreated(NoteCreatedEvent createdEvent) {
		messagingTemplate
				.convertAndSend("/topic/note.created." + createdEvent.getNoteId(), createdEvent.getNoteDetails());
	}

	@Override
	public void broadcastNoteDeleted(NoteDeletedEvent deletedEvent) {
		messagingTemplate
				.convertAndSend("/topic/note.deleted." + deletedEvent.getNoteId(), deletedEvent.getNoteDetails());
	}

	@Override
	public void broadcastNoteUpdated(NoteUpdatedEvent updatedEvent) {
		messagingTemplate
				.convertAndSend("/topic/note.updated." + updatedEvent.getNoteId(), updatedEvent.getNoteDetails());
	}
}
