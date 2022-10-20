package com.portal.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.entities.AuthenticationStatus;
import com.portal.entities.Doctor;
import com.portal.entities.DoctorLogin;
import com.portal.repositories.DoctorLoginRepository;
import com.portal.repositories.DoctorSignUpRepository;
@Service
public class DoctorLoginService {

	@Autowired
	DoctorLoginRepository doctorloginRepository;
	@Autowired
	DoctorSignUpRepository doctorRepo;
	
	public AuthenticationStatus validateDoctorLogin(String username, String password) {
		AuthenticationStatus status = null;
        DoctorLogin doctorlogin = doctorloginRepository.validateDoctorLogin(username, password);
        Doctor doctor=doctorRepo.findByUsername(username);
        String permission=doctor.getAccept();
        if(doctorlogin!=null && permission!=null) {
            status = new AuthenticationStatus(doctorlogin.getUsername(), doctorlogin.getPassword(), true);
        }
        else {
            status = new AuthenticationStatus(null, null, false);
        }
        return status;
	}
	
}