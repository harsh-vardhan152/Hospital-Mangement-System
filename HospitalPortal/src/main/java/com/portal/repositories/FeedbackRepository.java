package com.portal.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portal.entities.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Integer>{

}
