package com.portal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.repositories.AdminSignUpRepository;

@Service
public class AdminSignUpService {

	@Autowired
	private AdminSignUpRepository adminSignUpRepo;
	

}