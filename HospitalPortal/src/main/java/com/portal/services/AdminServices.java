package com.portal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.repositories.AdminRepository;
import com.portal.repositories.AppointmentRepository;
import com.portal.repositories.DoctorRepository;
import com.portal.repositories.InvoiceRepository;
import com.portal.repositories.UserRepository;

@Service
public class AdminServices {
	
	@Autowired
	AdminRepository adminRepo; //login purpose
	
	@Autowired
	AppointmentRepository appointmentrepo; 
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	DoctorRepository doctorRepo;
	
	@Autowired
	InvoiceRepository invoiceRepo;
	
	 

}
