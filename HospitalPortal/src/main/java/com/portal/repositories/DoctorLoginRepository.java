package com.portal.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.portal.entities.DoctorLogin;

public interface DoctorLoginRepository extends JpaRepository<DoctorLogin, String>{


}
