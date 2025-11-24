package com.jalquest.Jalquest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.jalquest.Jalquest")
public class JalquestApplication {
	public static void main(String[] args) {
		SpringApplication.run(JalquestApplication.class, args);
	}
}
