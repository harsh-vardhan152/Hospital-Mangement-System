package com.portal.services;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.repositories.FeedbackRepository;


@Service
public class FeedbackService {
	@Autowired
	FeedbackRepository feedbackRepo;
	
}