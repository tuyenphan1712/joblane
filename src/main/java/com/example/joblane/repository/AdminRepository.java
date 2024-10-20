package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.Admins;
import com.example.joblane.entity.Employers;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.JobPosts;
import com.example.joblane.entity.Users;

public interface AdminRepository extends MongoRepository<Admins, String> {
    // Custom queries can be defined here...
}
