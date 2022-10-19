package com.portal.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portal.entities.Appointment;
import com.portal.entities.DischargedPatient;
import com.portal.repositories.DischargedPatientRepository;




@CrossOrigin(origins="*")
@RequestMapping("/api/v1")
@RestController
public class DischargedPatientController {
	@Autowired
	private  DischargedPatientRepository dischargedpatientrepository;

	@GetMapping("/dischargedpatients")
	public List<DischargedPatient> getAllDischargedpatients()
	{
		return dischargedpatientrepository.findAll();
	}
	// http://localhost:8080/api/v1/doctors
		@PostMapping("/dischargedpatients")
		public DischargedPatient addDischargedPatient(@RequestBody DischargedPatient d) {
			DischargedPatient discharged = dischargedpatientrepository.save(d);
			return discharged;
		}
		
		@GetMapping("/dpCount")
		public int apCount() {
			int count=0;
			List<DischargedPatient> d=dischargedpatientrepository.findAll();
			for(DischargedPatient data : d) {
				if(data.getConfirm().matches("Discharged")) {
					++count;
				}
			}
			return count;
		}
		@DeleteMapping("/dischargedpatients/{d_id}")
		public void deleteP(@PathVariable int d_id) {
			
			dischargedpatientrepository.deleteById(d_id);
		}

}
