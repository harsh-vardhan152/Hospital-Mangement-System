package com.portal.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.entities.Feedback;
import com.portal.repositories.FeedbackRepository;
@Service
public class FeedbackService {
	@Autowired
	FeedbackRepository feedbackrepository;
	@Transactional
	public List<Feedback> fetchFeedbacks() {
		List<Feedback> feedbacklist=feedbackrepository.findAll();
		return feedbacklist;
		
	}
	@Transactional
	public Feedback saveFeedbacks(Feedback feedback) {
		
		return feedbackrepository.save(feedback);
		
//	}
//	@Transactional
//	public void updateFeedback(Feedback feedback) {
//		feedbackrrepository.save(feedback);	
//	
//	}
//	
//	@Transactional
//	public void deleteFeedback(int feedback_id) {
//		System.out.println("service method called");
//		feedbackRepository.deleteById(feedback_id);
//	
//	}
//	@Transactional 
//	  public Feedback getFeedback(int feedback_id) { 
//	  Optional<Feedback> optional= feedbackRepository.findById(feedback_id);
//	  Feedback feedback=optional.get();
//	  return feedback;
//	  }
//}
}
}