package com.portal.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portal.entities.PatientSignUp;

@Repository
public interface PatientSignUpRepository extends JpaRepository<PatientSignUp,Integer> {

}