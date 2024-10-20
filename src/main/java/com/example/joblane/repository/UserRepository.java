package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.Users;
import java.util.Optional;

public interface UserRepository extends MongoRepository<Users, String> {

    Users findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<Users> findById(Users userId);
    Users findByEmailAndPassword(String email, String password);
}
