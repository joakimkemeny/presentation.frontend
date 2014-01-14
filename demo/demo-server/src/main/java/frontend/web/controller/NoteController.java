package frontend.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NoteController {

	@RequestMapping("/patients/{patientId}/notes")
	public String index(@PathVariable Long patientId, Model model) {
		return "notes/index";
	}

	@RequestMapping("/patients/{patientId}/notes/create")
	public String create(@PathVariable Long patientId, Model model) {
		return "notes/create";
	}

	@RequestMapping("/patients/{patientId}/notes/{id}/edit")
	public String edit(@PathVariable Long patientId, @PathVariable Long id, Model model) {
		return "notes/edit";
	}
}
