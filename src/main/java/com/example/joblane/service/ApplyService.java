package com.example.joblane.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.joblane.entity.Applications;
import com.example.joblane.entity.Employers;
import com.example.joblane.entity.JobPosts;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.model.mapper.ApplyUpdateRequest;
import com.example.joblane.model.mapper.JobPostUpdateRequest;
import com.example.joblane.repository.ApplicationRepository;
import com.example.joblane.repository.EmployerRepository;
import com.example.joblane.repository.JobPostRepository;
import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;

@Service
public class ApplyService {
    @Autowired
  private JobSeekerRepository jobSeekerRepository;

  @Autowired
  private JobPostRepository jobpostRepository;

  @Autowired
  private ApplicationRepository applicationRepository;
  
  

  public void createApplication(ApplyUpdateRequest request) {
    System.out.println("Received userId: " + request.getUserId());
    System.out.println("Received jobSeekerId: " + request.getJobSeekerId());
    System.out.println("Received jobPostId: " + request.getJobPostId());

    if (request.getUserId() == null || request.getJobSeekerId() == null || request.getJobPostId() == null) {
      throw new RuntimeException("The id frontend must not be null");
  }

    JobSeekers jobseeker = jobSeekerRepository.findById(request.getJobSeekerId())
      .orElseThrow(() -> new RuntimeException("Employer not found"));
      JobPosts jobpost = jobpostRepository.findById(request.getJobPostId())
      .orElseThrow(() -> new RuntimeException("JobPost not found"));
      
     
    System.out.println("cover letter:" + request.getFormData().getCoverLetter());
    System.out.println("cv:" + request.getFormData().getCv());

    jobseeker.addAppliedPost(request.getJobPostId());
    jobSeekerRepository.save(jobseeker);

    Applications application = new Applications();

    application.setCoverLetter(request.getFormData().getCoverLetter());
    application.setCv(request.getFormData().getCv());
    application.setJobSeekerId(jobseeker);
    application.setJobPostId(jobpost);
    
    applicationRepository.save(application);

    
  }
}
