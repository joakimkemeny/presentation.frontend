package frontend.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReportController {

	@RequestMapping("/reports")
	public String index(Model model) {
		model.addAttribute("section", "reports");
		return "reports/index";
	}
}
