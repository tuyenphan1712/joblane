package com.example.joblane.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.JobPosts;

public  interface JobPostRepository extends MongoRepository<JobPosts, String>{

    List<JobPosts> findByTitleContainingAndLocationContainingAndCategoryContaining(String title, String location,
            String category);
    
}
