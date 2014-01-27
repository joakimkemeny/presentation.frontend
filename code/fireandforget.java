@Controller
public class EcgController {

  @Autowired
  private EcgMessagingService messagingService;

  @MessageMapping(value = "/ecg")
  public void ecgRecieved(EcgPoint ecgPoint) {
    messagingService.broadcastEcgPoint(ecgPoint);
  }
}
