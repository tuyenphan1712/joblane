package com.example.joblane.service;

import com.example.joblane.entity.Users;
import com.example.joblane.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public boolean validateUser(String email, String password) {
        Users user = userRepository.findByEmail(email);
    System.out.println("Fetched User: " + user);
    if (user != null && user.getPassword().equals(password)) {
        System.out.println("User validated successfully");
        return true;
    } else {
        System.out.println("User validation failed");
        return false;
    }
    }

    
}
