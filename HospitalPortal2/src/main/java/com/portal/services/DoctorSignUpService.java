package com.portal.services;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.entities.Doctor;
import com.portal.repositories.DoctorSignUpRepository;


@Service
public class DoctorSignUpService {
	@Autowired
	DoctorSignUpRepository doctorsignupRepository;
	@Transactional
	public List<Doctor> fetchDoctors() {
		List<Doctor> doctorlist=doctorsignupRepository.findAll();
		return doctorlist;
		
	}
	@Transactional
	public Doctor saveDoctor(Doctor doctorsignup) {
		
		return doctorsignupRepository.save(doctorsignup);
		
	}
	@Transactional
	public void updateDoctor(Doctor d) {
		doctorsignupRepository.save(d);	
	
	}
	@Transactional
	public void deleteDoctor(int d_Id) {
		
		System.out.println("service method called");
		doctorsignupRepository.deleteById(d_Id);
	
	}
	@Transactional 
	  public Doctor getDoctor(int d_Id) { 
	  Optional<Doctor> optional= doctorsignupRepository.findById(d_Id);
	  Doctor d=optional.get();
	  return d;
	  }
	

}
