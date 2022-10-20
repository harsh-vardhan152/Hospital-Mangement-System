package com.portal.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portal.entities.AuthenticationStatus;
import com.portal.entities.DoctorLogin;
import com.portal.services.DoctorLoginService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
@RestController
public class DoctorLoginController {
	@Autowired
	DoctorLoginService doctorloginService;
	@PostMapping("/doctorlogin")
	public ResponseEntity<AuthenticationStatus> validateDoctorLogin(@RequestBody DoctorLogin doctorlogin) 		
	{
			System.out.println(doctorlogin.getUsername()+" "+doctorlogin.getPassword());
			AuthenticationStatus status = doctorloginService.validateDoctorLogin(doctorlogin.getUsername(), doctorlogin.getPassword());
			return new ResponseEntity<AuthenticationStatus>(status, HttpStatus.OK);
			
		}
	}
