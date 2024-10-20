package com.example.joblane.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblane.entity.Employers;
import com.example.joblane.entity.JobPosts;
import com.example.joblane.entity.Users;
import com.example.joblane.model.mapper.EmployerUpdateRequest;
import com.example.joblane.model.mapper.ProfileUpdateRequest;
import com.example.joblane.repository.EmployerRepository;
import com.example.joblane.repository.UserRepository;
import com.example.joblane.service.EmployerService;
import com.example.joblane.service.JobSeekerService;

@RestController
@RequestMapping("/api")
public class EmployerController {
    @Autowired
  private EmployerService employerService;

  @Autowired
  private EmployerRepository employerRepository;

  @Autowired
  private UserRepository userRepository;

  @PostMapping("/updateEmployer")
  public ResponseEntity<Map<String, String>> updateProfile(@RequestBody EmployerUpdateRequest request) {
    Map<String, String> response = new HashMap<>();
    try {
      System.out.println("Received request: " + request); // Thêm dòng này để kiểm tra dữ liệu nhận được
      employerService.updateProfile(request);
      response.put("message", "Employer updated successfully");
      return ResponseEntity.ok(response);
    } catch (Exception e) {
      response.put("error", "Error updating profile: " + e.getMessage());
      return ResponseEntity.status(500).body(response);
    }
  }

  @GetMapping("/employer/{id}")
  public Employers getEmployerById(@PathVariable String id) {
    System.out.println("id: "+ id);
      return employerRepository.findById(id).orElse(null);
  }

  @GetMapping("/user/{id}")
  public Users getUserById(@PathVariable String id) {
    System.out.println("id: "+ id);
      return userRepository.findById(id).orElse(null);
  } 
    
}
