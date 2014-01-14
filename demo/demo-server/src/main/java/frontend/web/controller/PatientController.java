package frontend.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PatientController {

	@RequestMapping("/patients")
	public String index(Model model) {
		return "patients/index";
	}

	@RequestMapping("/patients/create")
	public String create(Model model) {
		return "patients/create";
	}

	@RequestMapping("/patients/{id}/edit")
	public String edit(@PathVariable Long id, Model model) {
		return "patients/edit";
	}
}
