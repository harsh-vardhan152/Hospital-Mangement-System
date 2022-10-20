package com.portal;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.portal.entities.DischargedPatient;
import com.portal.entities.Doctor;
import com.portal.entities.Feedback;
import com.portal.repositories.AppointmentRepository;
import com.portal.repositories.DischargedPatientRepository;
import com.portal.repositories.DoctorSignUpRepository;
import com.portal.repositories.FeedbackRepository;
import com.portal.repositories.PatientSignUpRepository;
import com.portal.entities.PatientSignUp;
import com.portal.entities.Appointment;

@SpringBootTest
class HospitalPortalApplicationTests {


	@Autowired
	PatientSignUpRepository patientsignupRepository;

	@Test
	public void addPatientSignUp() {
		PatientSignUp patientsignup = new PatientSignUp();
		patientsignup.setP_id(1);
		patientsignup.setP_name("krishna");
		patientsignup.setUsername("ctron");
		patientsignup.setPassword("root");
		patientsignup.setP_gender("Male");
		patientsignup.setP_contact_no("1234567890");
		patientsignupRepository.save(patientsignup);
 	}

	@Test
	public void  AllPatientSignUp() {
		List<PatientSignUp> list = patientsignupRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void PatientSignUp() {
		PatientSignUp patientsignup = patientsignupRepository.findById(1).get();
		assertEquals(1,patientsignup.getP_id());
	}


	@Autowired
	DoctorSignUpRepository doctorsignupRepository;

	@Test
	public void addDoctorSignUp() {
		Doctor doctorsignup= new Doctor();

		doctorsignup.setD_id(3);
		doctorsignup.setD_name("Kani");
		doctorsignup.setGender("Female");
		doctorsignup.setUsername("Kani");
		doctorsignup.setPassword("Kani1");
		doctorsignup.setContact_no("0987654321");
		doctorsignup.setAddress("kerala");
		doctorsignup.setSpecialization("BDS");
		doctorsignup.setAccept("NULL");
		doctorsignup.setExperiance("4");
		doctorsignup.setSalary("NULL");
		doctorsignupRepository.save(doctorsignup);
		assertNotNull(doctorsignupRepository.findById(3).get());
	}

	@Test
	public void AllDoctorSignUp() {
		List<Doctor> list = doctorsignupRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void DoctorSignUp() {
		Doctor doctorsignup = doctorsignupRepository.findById(3).get();
		assertEquals(3, doctorsignup.getD_id());
	}
	
	
	
	@Autowired
	AppointmentRepository appointmentRepository;

	@Test
	public void addAppointment() {

		Appointment appointment = new Appointment();
		appointment.setAp_id(2);
		appointment.setP_name("Yazhini");
		appointment.setD_name("Hemsri");
		appointment.setAddress("Madurai");
		appointment.setGender("Female");
		appointment.setAp_date("17/10/2022");
		appointment.setAp_time("11:00 AM");
		appointment.setDisease("cold");
		appointmentRepository.save(appointment);
		assertNotNull(appointmentRepository.findById(2).get());

	}

	@Test
	public void AllAppointment() {
		List<Appointment> list = appointmentRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void Appointment() {
		Appointment appointment = appointmentRepository.findById(2).get();
		assertEquals(2, appointment.getAp_id());
	}

	@Autowired
	DischargedPatientRepository dischargedpatientRepository;

	@Test
	public void addDischarge() {

		DischargedPatient DischargedPatient = new DischargedPatient();
		DischargedPatient.setD_id(1);
		DischargedPatient.setP_name("Manas");
		DischargedPatient.setD_name("Aman");
		DischargedPatient.setD_time("9.00 AM");
		DischargedPatient.setD_date("29/03/2022");
		DischargedPatient.setConfirm("confirm");
		dischargedpatientRepository.save(DischargedPatient);
		assertNotNull(dischargedpatientRepository.findById(1).get());
	}

	@Test
	public void AllDischargedPatient() {
		List<DischargedPatient> list = dischargedpatientRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	
	@Autowired
	FeedbackRepository feedbackRepository;
	
	@Test
	public void saveFeedbacks()
	{
		Feedback feedback= new Feedback();
		feedback.setFeedback_id(4);
		feedback.setD_name("Aman");
		feedback.setP_comments("Services is Good");
		feedback.setP_id(3);
		feedback.setP_name("Krishna");
		feedbackRepository.save(feedback);
		assertNotNull(feedbackRepository.findById(4).get());
	}

	@Test
	public void fetchFeedbacks() {
		List<Feedback> feedback=feedbackRepository.findAll();
		assertThat(feedback).size().isGreaterThan(0);
	}
}
