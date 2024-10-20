package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

import com.example.joblane.entity.Employers;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Users;

public interface EmployerRepository extends MongoRepository<Employers, String> {
    Employers findByUserId(Users user);
    // Custom queries can be defined here...

    Employers findByUserId(String userId);

}
