package com.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portal.entities.AdminSignUp;


public interface AdminSignUpRepository extends JpaRepository<AdminSignUp, Integer> {
	
        AdminSignUp findByEmailId(String email);

		AdminSignUp findByEmailIdAndPassword(String email, String password);
	

}
