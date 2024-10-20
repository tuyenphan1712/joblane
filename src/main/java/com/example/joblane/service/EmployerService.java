package com.example.joblane.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.joblane.entity.Companies;
import com.example.joblane.entity.Employers;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Users;
import com.example.joblane.model.mapper.EmployerUpdateRequest;
import com.example.joblane.model.mapper.ProfileUpdateRequest;
import com.example.joblane.repository.CompanyRepository;
import com.example.joblane.repository.EmployerRepository;
import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;

@Service
public class EmployerService {
    @Autowired
  private EmployerRepository employerRepository;

  @Autowired
  private UserRepository userRepository;
  @Autowired
  private CompanyRepository companyRepository;

  public void updateProfile(EmployerUpdateRequest request) {
    Users user = userRepository.findById(request.getUserId())
      .orElseThrow(() -> new RuntimeException("User not found"));
    Employers employer = employerRepository.findById(request.getEmployerId())
      .orElseThrow(() -> new RuntimeException("Jobseeker not found"));
    Companies companies = companyRepository.findById(request.getCompanyId())
      .orElseThrow(() -> new RuntimeException("Companies not found"));
      
      System.out.println("company id:" + companies.getId());

    user.setEmail(request.getFormData().getEmail());
    user.setName(request.getFormData().getFirstName() + " " + request.getFormData().getLastName());
    userRepository.save(user);
    
    employer.setAddress(request.getFormData().getAddress());
    employer.setPhone(request.getFormData().getPhone());
    employer.setAvatar(request.getFormData().getAvatar()); // Thêm dòng này
    employer.setCompanyId(companies);
    System.out.println(employer.getCompanyId());
    employerRepository.save(employer);

    System.out.println(employer);
  }
}
