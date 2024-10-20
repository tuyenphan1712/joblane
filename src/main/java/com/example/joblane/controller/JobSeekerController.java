package com.example.joblane.controller;

import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.joblane.entity.Employers;
import com.example.joblane.entity.JobPosts;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Users;
import com.example.joblane.model.mapper.ProfileUpdateRequest;
import com.example.joblane.repository.EmployerRepository;
import com.example.joblane.repository.JobPostRepository;
import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;
import com.example.joblane.service.JobSeekerService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api")
public class JobSeekerController {
  @Autowired
  private JobSeekerService jobSeekerService;
  @Autowired
  private JobSeekerRepository jobSeekerRepository;
  @Autowired
  private JobPostRepository jobpostRepository;

  @PostMapping("/updateProfile")
  public ResponseEntity<Map<String, String>> updateProfile(@RequestBody ProfileUpdateRequest request) {
    Map<String, String> response = new HashMap<>();
    try {
      System.out.println("Received request jsID: " + request.getJobseekerId()); // Thêm dòng này để kiểm tra dữ liệu nhận được
      jobSeekerService.updateProfile(request);
      response.put("message", "Profile updated successfully");
      return ResponseEntity.ok(response);
    } catch (Exception e) {
      response.put("error", "Error updating profile: " + e.getMessage());
      return ResponseEntity.status(500).body(response);
    }
  }

  @GetMapping("/jobseeker/{id}")
  public JobSeekers getJobSeekerById(@PathVariable String id) {
    System.out.println("id: "+ id);
      return jobSeekerRepository.findById(id).orElse(null);
  }
  @GetMapping("jobseeker/{id}/applied-posts")
    public ResponseEntity<List<JobPosts>> getAppliedPosts(@PathVariable String id) {
        JobSeekers jobseeker = jobSeekerRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("JobSeeker not found"));

        List<String> appliedPostIds = jobseeker.getAppliedPosts();
        List<JobPosts> appliedPosts = jobpostRepository.findAllById(appliedPostIds);

        return ResponseEntity.ok(appliedPosts);
    }
}