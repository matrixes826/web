package org.ghty826.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("react")
public class ReactController {
	private static final Logger logger = LoggerFactory.getLogger(ReactController.class);

	@GetMapping("demo1")
	public String demo1() {
		logger.trace("enter demo1");
		return "react/demo1";
	}

	@GetMapping("demo2")
	public String demo2() {
		logger.trace("enter demo2");
		return "react/demo2";
	}

	@GetMapping("demo3")
	public String demo3() {
		logger.trace("enter demo3");
		return "react/demo3";
	}

}
