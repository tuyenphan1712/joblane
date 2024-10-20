package com.example.joblane.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblane.entity.Companies;
import com.example.joblane.entity.JobPosts;
import com.example.joblane.model.mapper.JobPostUpdateRequest;
import com.example.joblane.model.mapper.ProfileUpdateRequest;
import com.example.joblane.repository.JobPostRepository;
import com.example.joblane.service.JobPostService;
import com.example.joblane.service.JobSeekerService;

@RestController
@RequestMapping("/api/jobposts")
public class JobPostController {
    @Autowired
    private JobPostRepository jobPostRepository;

    @Autowired
    private JobPostService jobPostService;

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createJobpost(@RequestBody JobPostUpdateRequest request) {
    Map<String, String> response = new HashMap<>();
    try {
      System.out.println("Received request: " + request); // Thêm dòng này để kiểm tra dữ liệu nhận được
      jobPostService.createJobPost(request);
      response.put("message", "Job post created successfully");
      return ResponseEntity.ok(response);
    } catch (Exception e) {
      response.put("error", "Error created: " + e.getMessage());
      return ResponseEntity.status(500).body(response);
    }
  }

    @GetMapping("/list")
    public List<JobPosts> getAllJobPosts() {
      return jobPostRepository.findAll();
    }

    @GetMapping("/{id}")
    public JobPosts getJobPostById(@PathVariable String id) {
      System.out.println("id: "+ id);
        return jobPostRepository.findById(id).orElse(null);
    }

}
