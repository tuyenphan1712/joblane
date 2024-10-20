package com.example.joblane.controller;

import com.example.joblane.config.AuthenticationException;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Employers;
import com.example.joblane.entity.Users;
import com.example.joblane.model.dto.LoginRequest;
import com.example.joblane.model.dto.UserLoginRequest;
import com.example.joblane.repository.EmployerRepository;
import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;
import com.example.joblane.service.AuthService;
import com.example.joblane.service.UserService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Users user = authService.login(loginRequest.getEmail(), loginRequest.getPassword());
            return ResponseEntity.ok(user);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp(@RequestBody Users user) {
      if (userRepository.existsByEmail(user.getEmail())) {
        return ResponseEntity.badRequest().body("Email already in use");
    }
    userRepository.save(user);
    System.out.println(user.getId());
    return ResponseEntity.ok().body(user);
    }

     @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @PostMapping("/jobseeker")
    public JobSeekers createJobSeeker(@RequestBody Map<String, String> request) {
      String userId = request.get("userId");
      Users user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
      
      JobSeekers jobSeeker = new JobSeekers();
      jobSeeker.setUserId(user);
      jobSeekerRepository.save(jobSeeker);
      
      user.setRole("Jobseeker");
      user.setJobSeekerId(jobSeeker);
      userRepository.save(user);
      System.out.println(jobSeeker);

      return jobSeeker;
    }

    @Autowired
    private EmployerRepository employerRepository;

    @PostMapping("/employer")
    public Employers createEmployer(@RequestBody Map<String, String> request) {
      String userId = request.get("userId");
      Users user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
      
      Employers employer = new Employers();
      employer.setUserId(user);
      employerRepository.save(employer);
      
      user.setRole("Employer");
      user.setEmployerId(employer);
      userRepository.save(user);
      System.out.println(employer);

      return employer;
    }
    

    
}