package com.example.joblane.controller;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.joblane.entity.Companies;
import com.example.joblane.entity.Users;
import com.example.joblane.repository.CompanyRepository;



@RestController
@RequestMapping("/api/companies")
public class CompanyController {
    
    @Autowired
    private CompanyRepository companyRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createCompany(@RequestBody Companies companies) {
      if (companyRepository.existsBycompanyEmail(companies.getCompanyEmail())) {
        return ResponseEntity.badRequest().body("Email already in use");
    }
    companyRepository.save(companies);
    System.out.println(companies.getId());
    return ResponseEntity.ok().body(companies);
    }
    

    @GetMapping("/names")
    public List<String> getAllCompanyNames() {
        return companyRepository.findAll().stream().map(Companies::getCompanyName).collect(Collectors.toList());
    }

    @GetMapping("/name/{companyName}")
    public ResponseEntity<Companies> getCompanyByName(@PathVariable String companyName) {
        Companies company = companyRepository.findBycompanyName(companyName);
        return company != null ? ResponseEntity.ok(company) : ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public Companies getCompanyById(@PathVariable String id) {
        return companyRepository.findById(id).orElse(null);
    }
}

