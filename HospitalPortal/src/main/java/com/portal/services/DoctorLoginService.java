package com.portal.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.repositories.DoctorLoginRepository;
@Service
public class DoctorLoginService {

	@Autowired
	DoctorLoginRepository doctorloginRepo;
	
}