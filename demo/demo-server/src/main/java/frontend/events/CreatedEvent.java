package frontend.events;

public abstract class CreatedEvent {

	protected final boolean creationCompleted;

	// Constructors

	protected CreatedEvent(boolean creationCompleted) {
		this.creationCompleted = creationCompleted;
	}

	// Getters

	public boolean isCreationCompleted() {
		return creationCompleted;
	}
}
