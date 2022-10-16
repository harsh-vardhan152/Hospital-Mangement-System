package com.portal.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portal.entities.Feedback;
import com.portal.repositories.FeedbackRepository;
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class FeedbackController {
	@Autowired
	//FeedbackService feedbackService;
	private FeedbackRepository feedbackrepository;
	//DoctorSignUpService doctorsignupService;
//http://localhost:8080/api/v1/alldoctors
	@GetMapping("/feedbacks")
	
	public List<Feedback> getAllFeedbacks()
	{
		return feedbackrepository.findAll();
		}


	@PostMapping("/feedbacks")
	public Feedback addFeedback(@RequestBody Feedback f) {
		Feedback feedback = feedbackrepository.save(f);
		return feedback;
	}

	

}