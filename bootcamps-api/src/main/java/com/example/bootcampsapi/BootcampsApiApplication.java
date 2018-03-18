package com.example.bootcampsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class BootcampsApiApplication {

	@RequestMapping("/")
	public String home() {
		return "bootcamps index";
	}

	public static void main(String[] args) {
		SpringApplication.run(BootcampsApiApplication.class, args);
	}
}