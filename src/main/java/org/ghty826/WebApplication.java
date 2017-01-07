package org.ghty826;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.web.WebApplicationInitializer;

@SpringBootApplication
public class WebApplication extends SpringBootServletInitializer implements WebApplicationInitializer {
	private static final Logger logger = LoggerFactory.getLogger(WebApplication.class);

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		logger.debug("configure start");
		return application.sources(WebApplication.class);
	}

	public static void main(String[] args) {
		logger.debug("main start");
		SpringApplication.run(WebApplication.class, args);
		logger.debug("main start success");
	}

}
