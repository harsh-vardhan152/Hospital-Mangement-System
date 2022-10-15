package com.portal.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.repositories.PatientLoginRepository;

@Service
public class PatientLoginService {

	@Autowired
	PatientLoginRepository patientLoginRepo;
	
}