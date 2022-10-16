package com.portal.controllers;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portal.entities.Doctor;
import com.portal.exception.ResourceNotFoundException;
import com.portal.repositories.DoctorSignUpRepository;


@CrossOrigin(origins="*")
@RequestMapping("/api/v1")
@RestController
public class DoctorSignUpController {
	@Autowired
	private DoctorSignUpRepository doctorsignuprepository;
	//DoctorSignUpService doctorsignupService;
//http://localhost:8080/api/v1/alldoctors
	@GetMapping("/doctors")
	
	public List<Doctor> getAllDoctors()
	{
		return doctorsignuprepository.findAll();
		}


	//get doctor by id restapi
	@GetMapping("/doctors/{d_id}")
	public ResponseEntity<Doctor> getDoctorById(@PathVariable  int d_id) throws ResourceNotFoundException {
		Doctor doctor=doctorsignuprepository.findById(d_id).orElseThrow(() ->new ResourceNotFoundException("Doctor not exist with id :" +d_id));
		return  ResponseEntity.ok(doctor);
	}
	//update doctors
	@PutMapping("/doctors/{d_id}")
	public ResponseEntity<Doctor> updateDoctor(@PathVariable int d_id, @RequestBody Doctor doctor) throws ResourceNotFoundException
	{
		Doctor d= doctorsignuprepository.findById(d_id).orElseThrow(() ->new ResourceNotFoundException("Doctor not exist with id :" +d_id));
		d.setD_name(doctor.getD_name());
		d.setGender(doctor.getGender());
		d.setUsername(doctor.getUsername());
		d.setPassword(doctor.getPassword());
		d.setContact_no(doctor.getContact_no());
		d.setAddress(doctor.getAddress());
		d.setSpecialization(doctor.getSpecialization());
		d.setExperiance(doctor.getExperiance());
		d.setSalary(doctor.getSalary());
		d.setAccept(doctor.getAccept());
		
		 Doctor updatedDoctor = doctorsignuprepository.save(d);
		return ResponseEntity.ok(updatedDoctor);
	}

	// http://localhost:8080/api/v1/doctors
	@PostMapping("/doctors")
	public Doctor addDoctorSignUp(@RequestBody Doctor d) {
		Doctor doctorsignup = doctorsignuprepository.save(d);
		return doctorsignup;
	}


//http://localhost:8080/api/v1/doctors/1
	@DeleteMapping(value = "/doctors/{d_id}")
	public ResponseEntity< Map<String, Boolean>> deleteDoctor(@PathVariable int d_id ) throws ResourceNotFoundException
	{
		Doctor d= doctorsignuprepository.findById(d_id)
				.orElseThrow(() ->new ResourceNotFoundException("Doctor not exist with id :" +d_id));
		 doctorsignuprepository.delete(d);
		 Map<String, Boolean> response = new HashMap<>();
		 response.put("deleted", Boolean.TRUE);
		 return ResponseEntity.ok(response);
	}
	
}
