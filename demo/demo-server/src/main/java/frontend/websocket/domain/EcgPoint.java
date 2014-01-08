package frontend.websocket.domain;

import frontend.events.ecg.EcgPointDetails;
import org.springframework.beans.BeanUtils;

public class EcgPoint {

	private long x;
	private double y;

	// Helpers

	public EcgPointDetails toEcgPointDetails() {

		EcgPointDetails details = new EcgPointDetails();
		BeanUtils.copyProperties(this, details);
		return details;
	}

	public static EcgPoint fromEcgPointDetails(EcgPointDetails details) {

		EcgPoint ecgPoint = new EcgPoint();
		BeanUtils.copyProperties(details, ecgPoint);
		return ecgPoint;
	}

	// Getters / Setters

	public long getX() {
		return x;
	}

	public void setX(long x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}
}
