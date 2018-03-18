package com.example.salaryapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class SalaryApiApplication {

	@RequestMapping("/")
	public String home() {
		return "salary index";
	}

	public static void main(String[] args) {
		SpringApplication.run(SalaryApiApplication.class, args);
	}
}