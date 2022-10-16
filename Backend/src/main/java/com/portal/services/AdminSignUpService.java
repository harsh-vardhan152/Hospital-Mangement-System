package com.portal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portal.entities.AdminSignUp;
import com.portal.repositories.AdminSignUpRepository;

@Service
public class AdminSignUpService {

	@Autowired
	private AdminSignUpRepository adminSignUpRepo;
	public AdminSignUp saveAdmin(AdminSignUp admin){
		return adminSignUpRepo.save(admin);
		}
	public AdminSignUp fetchAdminByEmailId(String email)
	{
		return adminSignUpRepo.findByEmailId(email);
	}
	
	public AdminSignUp fetchAdminByEmailIdandPassword(String email, String password)
	{
		return adminSignUpRepo.findByEmailIdAndPassword(email, password);
	}

}