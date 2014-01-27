@Component
public class PatientMessagingEventHandler {

  @Autowired
  private SimpMessageSendingOperations messagingTemplate;

  public void broadcastPatientCreated(PatientCreatedEvent event) {
    messagingTemplate.convertAndSend("/topic/patient.created",
      Patient.fromPatientDetails(event.getPatientDetails()));
  }

  ...
}
