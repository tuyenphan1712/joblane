package com.example.joblane.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblane.entity.JobPosts;
import com.example.joblane.model.dto.SearchRequest;
import com.example.joblane.repository.JobPostRepository;

@RestController
@RequestMapping("/api")
public class SearchController {
    @Autowired
    private JobPostRepository jobPostRepository;

    @GetMapping("/locations")
    public List<String> getAllLocations() {
        return jobPostRepository.findAll()
                                .stream()
                                .map(JobPosts::getLocation)
                                .distinct()
                                .collect(Collectors.toList());
    }
    
    @PostMapping("/search-jobs")
    public List<JobPosts> searchJobs(@RequestBody SearchRequest searchRequest) {
        return jobPostRepository.findByTitleContainingAndLocationContainingAndCategoryContaining(
            searchRequest.getTitle(),
            searchRequest.getLocation(),
            searchRequest.getCategory()
        );
    }
}
