package com.portal.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.entities.Appointment;
import com.portal.repositories.AppointmentRepository;

@Service
public class AppointmentService {
	@Autowired
	AppointmentRepository AppointmentRepository;
	
	@Transactional
	public List<Appointment> fetchAppointments() {
		List<Appointment> appointmentList=AppointmentRepository.findAll();
		return appointmentList;
		
	}
	@Transactional
	public Appointment saveAppointment(Appointment appointment) {
		
		return AppointmentRepository.save(appointment);
		
	}
	@Transactional
	public void updateAppointment(Appointment appo) {
		AppointmentRepository.save(appo);	
	
	}
	
	@Transactional
	public void deleteAppointment(int ap_id) {
		//empRepository.delete(emp);	
		System.out.println("service method called");
           AppointmentRepository.deleteById(ap_id);
	
	}
	@Transactional 
	  public Appointment getAppointment(int ap_id) { 
	  Optional<Appointment> optional= AppointmentRepository.findById(ap_id);
	  Appointment a=optional.get();
	  return a;
	  }
	
}
