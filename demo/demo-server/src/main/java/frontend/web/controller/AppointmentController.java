package frontend.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppointmentController {

	@RequestMapping("/appointments")
	public String index(Model model) {
		return "appointments/index";
	}

	@RequestMapping("/appointments/create")
	public String create(Model model) {
		return "appointments/create";
	}

	@RequestMapping("/appointments/{id}/edit")
	public String edit(@PathVariable Long id, Model model) {
		return "appointments/edit";
	}
}
