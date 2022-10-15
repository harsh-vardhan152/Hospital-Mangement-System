package com.portal.repositories;

import org.springframework.data.repository.CrudRepository;

import com.portal.entities.Doctor;

public interface DoctorRepository extends CrudRepository<Doctor, Long> {

}
