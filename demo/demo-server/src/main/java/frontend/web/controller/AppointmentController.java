package frontend.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppointmentController {

	@RequestMapping("/appointments")
	public String index(Model model) {
		model.addAttribute("section", "appointments");
		return "appointments/index";
	}

	@RequestMapping("/appointments/create")
	public String create(Model model) {
		model.addAttribute("section", "appointments");
		return "appointments/create";
	}

	@RequestMapping("/appointments/{id}/edit")
	public String edit(@PathVariable Long id, Model model) {
		model.addAttribute("section", "appointments");
		return "appointments/edit";
	}
}
