package frontend.events;

public abstract class UpdatedEvent {

	protected final boolean entityFound;
	protected final boolean updateCompleted;

	// Constructors

	protected UpdatedEvent(boolean updateCompleted, boolean entityFound) {

		this.updateCompleted = updateCompleted;
		this.entityFound = entityFound;
	}

	// Getters

	public boolean isEntityFound() {
		return entityFound;
	}

	public boolean isUpdateCompleted() {
		return updateCompleted;
	}
}
