package com.example.joblane.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.joblane.entity.Applications;
import com.example.joblane.entity.Users;
import com.example.joblane.repository.UserRepository;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    private UserRepository userRepository;

    @Autowired
    public DatabaseSeeder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Users user = new Users();
        // user.setName("Test User");
        // user.setEmail("abc@gmail.com");
        // user.setPassword("abc");
        // user.setRole("ROLE_USER");
        // user.setGoogleLinked(false);
        

    }
}
