package frontend.core.domain;

import frontend.events.ecg.EcgPointDetails;
import org.springframework.beans.BeanUtils;

public class EcgPoint {

	private final long x;
	private final double y;

	// Constructors

	public EcgPoint(long x, double y) {
		this.x = x;
		this.y = y;
	}

	// Helpers

	public EcgPointDetails toEcgPointDetails() {

		EcgPointDetails details = new EcgPointDetails();
		BeanUtils.copyProperties(this, details);
		return details;
	}

	public static EcgPoint fromEcgPointDetails(EcgPointDetails details) {
		return new EcgPoint(details.getX(), details.getY());
	}

	// Getters

	public long getX() {
		return x;
	}

	public double getY() {
		return y;
	}
}
