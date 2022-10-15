package com.portal.repositories;

import org.springframework.data.repository.CrudRepository;

import com.portal.entities.PatientAppointments;

public interface AppointmentRepository extends CrudRepository<PatientAppointments, Long> {

}
