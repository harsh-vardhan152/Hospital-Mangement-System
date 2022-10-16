package com.portal.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portal.entities.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {

}
