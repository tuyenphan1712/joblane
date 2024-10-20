package com.example.joblane.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblane.model.mapper.ApplyUpdateRequest;
import com.example.joblane.model.mapper.JobPostUpdateRequest;
import com.example.joblane.repository.ApplicationRepository;
import com.example.joblane.repository.JobPostRepository;
import com.example.joblane.service.ApplyService;
import com.example.joblane.service.JobPostService;

@RestController
@RequestMapping("/api/application")
public class ApplicationController {
    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private ApplyService applyService;

    @PostMapping("/apply")
    public ResponseEntity<Map<String, String>> createJobpost(@RequestBody ApplyUpdateRequest request) {
    Map<String, String> response = new HashMap<>();
    try {
      System.out.println("Received request jsId: " + request.getJobSeekerId()); // Thêm dòng này để kiểm tra dữ liệu nhận được
      applyService.createApplication(request);
      response.put("message", "Job post created successfully");
      return ResponseEntity.ok(response);
    } catch (Exception e) {
      response.put("error", "Error created: " + e.getMessage());
      return ResponseEntity.status(500).body(response);
    }
  }
}
