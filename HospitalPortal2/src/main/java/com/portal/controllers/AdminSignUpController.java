package com.portal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.portal.entities.AdminSignUp;
import com.portal.services.AdminSignUpService;

@RestController
public class AdminSignUpController {
	@Autowired
	private AdminSignUpService service;
	
	@PostMapping("/registerAdmin")
	@CrossOrigin(origins = "http://localhost:4200")
	public AdminSignUp registerAdmin(@RequestBody AdminSignUp admin) throws Exception{
		String tempEmailId = admin.getEmailId();
		if(tempEmailId != null && !"".equals(tempEmailId))
		{
			AdminSignUp adminobj = service.fetchAdminByEmailId(tempEmailId);
			
			if(adminobj != null)
			{
				throw new Exception("admin with "+tempEmailId+" is already exists");
			}
			
		}
		AdminSignUp adminObj=null;
		adminObj = service.saveAdmin(admin);
		return adminObj;
	}
	
	@PostMapping("/adminlogin")
	@CrossOrigin(origins = "http://localhost:4200")
	public AdminSignUp loginuser(@RequestBody AdminSignUp admin) throws Exception {
		String tempEmailId = admin.getEmailId();
		String tempPass=admin.getPassword();
		AdminSignUp adminObj = null;
		if(tempEmailId != null && tempPass != null ) {
			
			adminObj = service.fetchAdminByEmailIdandPassword(tempEmailId, tempPass);
					
		}
		if(adminObj ==null) {
			throw new Exception("Invalid Credentials");
		}
			
		return adminObj;
	
	}

}