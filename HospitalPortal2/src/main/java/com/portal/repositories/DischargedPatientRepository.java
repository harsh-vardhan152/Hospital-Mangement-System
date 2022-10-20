package com.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portal.entities.DischargedPatient;




public interface DischargedPatientRepository  extends JpaRepository<DischargedPatient,Integer> {

	void deleteBypName(String p_name);

}
