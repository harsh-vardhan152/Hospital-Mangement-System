package com.portal.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.repositories.DischargedPatientRepository;

@Service
public class DischargedPatientService {
	@Autowired
	DischargedPatientRepository dischargedPatientRepo;
	
}
