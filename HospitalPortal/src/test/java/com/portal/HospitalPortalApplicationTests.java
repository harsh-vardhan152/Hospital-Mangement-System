package com.portal;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.portal.entities.Doctor;
import com.portal.repositories.DoctorSignUpRepository;
import com.portal.repositories.PatientSignUpRepository;
import com.portal.entities.PatientSignUp;

@SpringBootTest
class HospitalPortalApplicationTests {


	@Autowired
	PatientSignUpRepository patientsignupRepository;

	@Test
	public void addPatientSignUp() {
		PatientSignUp patientsignup = new PatientSignUp();
		patientsignup.setP_id(3);
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
		PatientSignUp patientsignup = patientsignupRepository.findById(3).get();
		assertEquals(3,patientsignup.getP_id());
	}


	@Autowired
	DoctorSignUpRepository doctorsignupRepository;

	@Test
	public void addDoctorSignUp() {
		Doctor doctorsignup= new Doctor();

		doctorsignup.setD_id(1);
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
		assertNotNull(doctorsignupRepository.findById(1).get());
	}

	@Test
	public void AllDoctorSignUp() {
		List<Doctor> list = doctorsignupRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void DoctorSignUp() {
		Doctor doctorsignup = doctorsignupRepository.findById(1).get();
		assertEquals(1, doctorsignup.getD_id());
	}

}
