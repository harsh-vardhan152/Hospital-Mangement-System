package com.portal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.repositories.AppointmentRepository;
import com.portal.repositories.DoctorRepository;
import com.portal.repositories.InvoiceRepository;

@Service
public class DoctorServices {
	
	@Autowired
	DoctorRepository doctorRepo;
	
	@Autowired
	AppointmentRepository appointmentRepo;
	
	@Autowired
	InvoiceRepository invoiceRepo;
	
	

}
