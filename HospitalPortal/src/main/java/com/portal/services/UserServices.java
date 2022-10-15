package com.portal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.repositories.AppointmentRepository;
import com.portal.repositories.InvoiceRepository;
import com.portal.repositories.UserRepository;

@Service
public class UserServices {
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	AppointmentRepository appointmentRepo;
	
	@Autowired
	InvoiceRepository invoiceRepo;
	
	

}
