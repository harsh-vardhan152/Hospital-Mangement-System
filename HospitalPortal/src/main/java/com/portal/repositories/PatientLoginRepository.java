package com.portal.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.portal.entities.PatientLogin;

public interface PatientLoginRepository extends JpaRepository<PatientLogin, String>{
}