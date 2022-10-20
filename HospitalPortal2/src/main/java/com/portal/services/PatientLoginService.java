package com.portal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.entities.AuthenticationStatus;
import com.portal.entities.PatientLogin;
import com.portal.entities.PatientSignUp;
import com.portal.repositories.PatientLoginRepository;
import com.portal.repositories.PatientSignUpRepository;


@Service
public class PatientLoginService {

	   @Autowired
	    PatientSignUpRepository patientRepo;
	   
	   @Autowired
	    PatientLoginRepository patientloginRepository;
	   
	    public AuthenticationStatus validatePatientLogin(String username, String password) {
	        AuthenticationStatus status = null;
	        PatientLogin patientlogin = patientloginRepository.validatePatientLogin(username, password);
	        PatientSignUp patientData=patientRepo.findByUsername(username);
	        String permission=patientData.getAccept();
	        if(patientlogin!=null && permission!=null) {
	            status = new AuthenticationStatus(patientlogin.getUsername(), patientlogin.getPassword(), true);
	        }
	        else {
	            status = new AuthenticationStatus(null, null, false);
	           
	        }
	        return status;
	    }
}