package frontend.core.domain;

import frontend.events.ecg.EcgPointDetails;
import org.springframework.beans.BeanUtils;

public class EcgPoint {

	private final int x;
	private final double y;

	// Constructors

	public EcgPoint(int x, double y) {
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

	public int getX() {
		return x;
	}

	public double getY() {
		return y;
	}
}
