package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Users;

public interface JobSeekerRepository extends MongoRepository<JobSeekers, String> {

    JobSeekers findByUserId(Users user);
    // Custom queries can be defined here...
}
