package com.example.joblane.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.joblane.entity.Employers;
import com.example.joblane.entity.JobPosts;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Users;
import com.example.joblane.model.mapper.JobPostUpdateRequest;
import com.example.joblane.model.mapper.ProfileUpdateRequest;
import com.example.joblane.repository.EmployerRepository;
import com.example.joblane.repository.JobPostRepository;
import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;

@Service
public class JobPostService {
     @Autowired
  private JobPostRepository jobPostRepository;

  @Autowired
  private EmployerRepository employerRepository;
  
  

  public void createJobPost(JobPostUpdateRequest request) {
    Employers employers = employerRepository.findById(request.getEmployerId())
      .orElseThrow(() -> new RuntimeException("Employer not found"));

      System.out.println("Company id:" + employers.getCompanyId().getId());

    JobPosts jobpost = new JobPosts();

    jobpost.setTitle(request.getFormData().getTitle());
    jobpost.setCategory(request.getFormData().getCategory1()+" "+ request.getFormData().getCategory2()+" " + request.getFormData().getCategory3());
    jobpost.setLocation((request.getFormData().getLocation()));
    jobpost.setType(request.getFormData().getType());
    jobpost.setCompanyType(request.getFormData().getCompanyType());

    jobpost.setSpecialization(request.getFormData().getSpecialization());
    jobpost.setExperience(request.getFormData().getExperience());
    jobpost.setSalaryRange(request.getFormData().getSalaryRange());
    jobpost.setBenefitsAndDescription(request.getFormData().getBenefitsAndDescription());
    jobpost.setRequirement(request.getFormData().getRequirement());

    jobpost.setHiringProcess(request.getFormData().getHiringProcess());
    jobpost.setHowToApply(request.getFormData().getHowToApply());
    jobpost.setStartDate(request.getFormData().getStartDate());
    jobpost.setEndDate(request.getFormData().getEndDate());
    jobpost.setJobPostImage(request.getFormData().getJobPostImage());

    jobpost.setEmployerId(employers);
    jobpost.setCompanyId(employers.getCompanyId());
    System.out.println(jobpost);
    
    jobPostRepository.save(jobpost);

    
  }
}
