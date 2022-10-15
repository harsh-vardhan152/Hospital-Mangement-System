package com.portal.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.portal.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
