package frontend.web.controller;

import frontend.core.services.AppointmentService;
import frontend.events.appointment.AllAppointmentsEvent;
import frontend.events.appointment.AppointmentDetails;
import frontend.events.appointment.RequestAllAppointmentsEvent;
import frontend.web.domain.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

	@RequestMapping("/appointments")
	public String index(Model model) {
		return "redirect:/appointments/day";
	}

	@RequestMapping("/appointments/{interval}")
	public String year(@PathVariable String interval, Model model) throws ParseException {

		AllAppointmentsEvent allEvent = appointmentService.requestAllAppointments(new RequestAllAppointmentsEvent());

		List<Appointment> appointments = new ArrayList<>();
		for (AppointmentDetails details : allEvent.getAppointmentsDetails()) {
			appointments.add(Appointment.fromAppointmentDetails(details));
		}

		Date startDate = "day".equals(interval) ? sdf.parse("2014-01-29") : sdf.parse("2014-01-27");
		Date endDate = "day".equals(interval) ? sdf.parse("2014-01-29") : sdf.parse("2014-01-31");

		model.addAttribute("appointments", appointments);
		model.addAttribute("startDate", startDate);
		model.addAttribute("endDate", endDate);
		model.addAttribute("section", "appointments");

		return "appointments/" + interval + "/index";
	}

	@RequestMapping("/appointments/{interval}/create")
	public String create(@PathVariable String interval, Model model) {

		AllAppointmentsEvent allEvent = appointmentService.requestAllAppointments(new RequestAllAppointmentsEvent());

		List<Appointment> appointments = new ArrayList<>();
		for (AppointmentDetails details : allEvent.getAppointmentsDetails()) {
			appointments.add(Appointment.fromAppointmentDetails(details));
		}

		Date startDate = new Date();
		Date endDate = new Date();

		model.addAttribute("appointments", appointments);
		model.addAttribute("startDate", startDate);
		model.addAttribute("endDate", endDate);
		model.addAttribute("section", "appointments");

		return "appointments/" + interval + "/create";
	}

	@RequestMapping("/appointments/{interval}/{id}/edit")
	public String edit(@PathVariable String interval, @PathVariable Long id, Model model) {
		model.addAttribute("section", "appointments");
		return "appointments/edit";
	}
}
