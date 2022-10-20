package com.portal.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.entities.DischargedPatient;
import com.portal.repositories.DischargedPatientRepository;



@Service
public class DischargedPatientService {
	@Autowired
	DischargedPatientRepository dischargedpatientepository;
	@Transactional
	public List<DischargedPatient> fetchDischargedpatient() {
		List<DischargedPatient> dischargedlist=dischargedpatientepository.findAll();
		return dischargedlist;
		
	}
	@Transactional
	public DischargedPatient saveDischargedPatient(DischargedPatient dischargedpatient) {
		
		return dischargedpatientepository.save(dischargedpatient);
		
	}
}
