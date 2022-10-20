package com.portal.services;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.entities.PatientSignUp;
import com.portal.repositories.PatientSignUpRepository;

@Service
public class PatientSignUpService {
	@Autowired
	PatientSignUpRepository patientSignupRepo;
	
	@Transactional
	public List<PatientSignUp> fetchPatients() {
		List<PatientSignUp> patientsignupList=patientSignupRepo.findAll();
		return patientsignupList;
		
	}
	
	@Transactional
	public PatientSignUp savePatientSignUp(PatientSignUp patientsignup) {
		return patientSignupRepo.save(patientsignup);
		
	}
	
	@Transactional
	public void update(PatientSignUp p) {
		patientSignupRepo.save(p);	
	
	}
	
	@Transactional
	public void deletePatient(int p_id) {	
		System.out.println("service method called");
		patientSignupRepo.deleteById(p_id);
	
	}
	
	@Transactional 
	  public PatientSignUp getPatient(int p_id) { 
	  Optional<PatientSignUp> optional= patientSignupRepo.findById(p_id);
	  PatientSignUp p=optional.get();
	  return p;
	  }
	
}