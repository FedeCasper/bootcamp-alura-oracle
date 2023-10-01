package med.voll.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
		System.out.println("*****************************");
		System.out.println("APLICATION STARTED SUCCESFULLY");
		System.out.println("*****************************");
	}

}
