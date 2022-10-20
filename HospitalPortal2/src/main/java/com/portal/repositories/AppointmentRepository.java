package com.portal.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portal.entities.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {

	List<Appointment> findByDoctorName(String d_name);

	
	

}
