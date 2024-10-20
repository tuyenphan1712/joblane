package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.Applications;

public interface ApplicationRepository extends MongoRepository<Applications, String> {

}
