package frontend.events.ecg;

import frontend.events.ReadEvent;

public class EcgPointDetailsEvent extends ReadEvent {

	private final EcgPointDetails ecgPointDetails;

	// Constructors

	public EcgPointDetailsEvent(EcgPointDetails ecgPointDetails) {
		this.ecgPointDetails = ecgPointDetails;
	}

	// Getters

	public EcgPointDetails getEcgPointDetails() {
		return ecgPointDetails;
	}
}
