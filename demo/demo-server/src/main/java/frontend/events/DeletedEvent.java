package frontend.events;

public abstract class DeletedEvent {

	protected final boolean entityFound;
	protected final boolean deletionCompleted;

	// Constructors

	protected DeletedEvent(boolean entityFound, boolean deletionCompleted) {

		this.entityFound = entityFound;
		this.deletionCompleted = deletionCompleted;
	}

	// Getters

	public boolean isEntityFound() {
		return entityFound;
	}

	public boolean isDeletionCompleted() {
		return deletionCompleted;
	}
}
