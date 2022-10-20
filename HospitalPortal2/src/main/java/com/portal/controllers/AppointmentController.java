package com.portal.controllers;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.portal.entities.Appointment;
import com.portal.entities.Doctor;
import com.portal.exception.ResourceNotFoundException;
import com.portal.repositories.AppointmentRepository;


@CrossOrigin(origins="*")
@RequestMapping("/api/v1")
@RestController
public class AppointmentController {
	@Autowired
	private AppointmentRepository appointmentrepository;
	//DoctorSignUpService doctorsignupService;
//http://localhost:8081/api/v1/appointments
	@GetMapping("/appointments")
	
	public List<Appointment> getAllAppointments()
	{
		return appointmentrepository.findAll();
		}

//	// http://localhost:8080/api/v1/doctors/45 
//	@GetMapping("/doctors/{d_id}")
//	public ResponseEntity<Doctor> getDoctorById(@PathVariable("d_id") int d_id)
//			throws ResourceNotFoundException {
//		//Doctor d = doctorsignupService.getDoctor(d_id);
//		
//		return ResponseEntity.ok().body(d);
//	}
	//get doctor by id restapi
	@GetMapping("/appointments/{ap_id}")
	public ResponseEntity<Appointment> getAppointmentById(@PathVariable  int ap_id) throws ResourceNotFoundException {
		Appointment appointment=appointmentrepository.findById(ap_id).orElseThrow(() ->new ResourceNotFoundException("Appointment not exist with id :" +ap_id));
		return  ResponseEntity.ok(appointment);
	}
	//update doctors
	@PutMapping("/appointments/{ap_id}")
	public ResponseEntity<Appointment> updateAppointment(@PathVariable int ap_id, @RequestBody Appointment appointment) throws ResourceNotFoundException
	{
		Appointment a=appointmentrepository.findById(ap_id).orElseThrow(() ->new ResourceNotFoundException("Appointment not exist with id :" +ap_id));
		a.setD_name(appointment.getD_name());
		a.setGender(appointment.getGender());
		a.setP_name(appointment.getP_name());
		a.setAp_date(appointment.getAp_date());
		a.setAp_time(appointment.getAp_time());
		a.setAddress(appointment.getAddress());
		a.setDisease(appointment.getDisease());
		Appointment updatedAppointment = appointmentrepository.save(a);
		return ResponseEntity.ok(updatedAppointment);
	}

	// http://localhost:8080/api/v1/doctors
	@PostMapping("/appointments")
	public Appointment addAppointment(@RequestBody Appointment a) {
		Appointment appointment = appointmentrepository.save(a);
		return appointment;
	}


//http://localhost:8080/api/v1/doctors/1
	@DeleteMapping(value = "/appointments/{ap_id}")
	public ResponseEntity< Map<String, Boolean>> deleteDoctor(@PathVariable int ap_id ) throws ResourceNotFoundException
	{
		Appointment a= appointmentrepository.findById(ap_id)
				.orElseThrow(() ->new ResourceNotFoundException("Appointment not exist with id :" +ap_id));
		appointmentrepository.delete(a);
		 Map<String, Boolean> response = new HashMap<>();
		 response.put("deleted", Boolean.TRUE);
		 return ResponseEntity.ok(response);
	}
	
	@GetMapping("/appointmentsCount")
	public int apCount() {
		int count=0;
		List<Appointment> d=appointmentrepository.findAll();
		for(Appointment data : d) {
			if(data.getD_name()==null) {
				++count;
			}
		}
		return count;
	}
	
	@GetMapping("/docappointments/{d_name}")
	public List<Appointment> getAppointmentByDoctor(@PathVariable String d_name) {
		
		List<Appointment> ap=appointmentrepository.findByDoctorName(d_name);
		return ap;
		
	}
	
}
