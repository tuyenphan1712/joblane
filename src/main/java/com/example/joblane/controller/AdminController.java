package com.example.joblane.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblane.entity.Employers;
import com.example.joblane.entity.JobPosts;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Users;
import com.example.joblane.repository.EmployerRepository;
import com.example.joblane.service.EmployerService;
import com.example.joblane.repository.JobPostRepository;
import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;;

@RestController
@RequestMapping("/api")
public class AdminController {
    private final JobPostRepository jobPostRepository;
    private EmployerRepository employerRepository;
    private final JobSeekerRepository jobSeekerRepository;
    private final UserRepository userRepository;

    public AdminController(JobPostRepository jobPostRepository, EmployerRepository employerRepository,
            JobSeekerRepository jobSeekerRepository, UserRepository userRepository) {
        this.jobPostRepository = jobPostRepository;
        this.employerRepository = employerRepository;
        this.jobSeekerRepository = jobSeekerRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/listJobposts")
    public List<JobPosts> getAllJobPosts() {
        return jobPostRepository.findAll();
    }

    @GetMapping("/{id}")
    public JobPosts getJobPostById(@PathVariable String id) {
        System.out.println("id: " + id);
        return jobPostRepository.findById(id).orElse(null);
    }

    @GetMapping("/listEmployers")
    public List<Users> getAllEmployers() {
        return userRepository.findAll().stream().filter(user -> user.getRole().equals("employer"))
                .toList();
    }

    @GetMapping("/listJobseekers")
    public List<JobSeekers> getAllJobSeekers() {
        return jobSeekerRepository.findAll();
    }
}
