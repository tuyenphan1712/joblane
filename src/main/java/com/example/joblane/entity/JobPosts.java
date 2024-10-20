package com.example.joblane.entity;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Document(collection = "jobposts")
public class JobPosts {
    @Id
    private String id;
    private String title;
    private String category;
    private String location;
    private String type;
    private String companyType;
    private String specialization;
    private String experience;
    private String salaryRange;
    private String benefitsAndDescription;
    private String requirement;
    private String hiringProcess;
    private String howToApply;
    private String jobPostImage;
    private Date startDate;
    private Date endDate;
    private boolean isApproved;

    @DBRef
    @JsonManagedReference
    private Employers employerId;

    @DBRef
    @JsonManagedReference
    private Companies companyId;

    public Companies getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Companies companyId) {
        this.companyId = companyId;
    }

    public Employers getEmployerId() {
        return employerId;
    }

    public void setEmployerId(Employers employerId) {
        this.employerId = employerId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCompanyType() {
        return companyType;
    }

    public void setCompanyType(String companyType) {
        this.companyType = companyType;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getSalaryRange() {
        return salaryRange;
    }

    public void setSalaryRange(String salaryRange) {
        this.salaryRange = salaryRange;
    }

    public String getBenefitsAndDescription() {
        return benefitsAndDescription;
    }

    public void setBenefitsAndDescription(String benefitsAndDescription) {
        this.benefitsAndDescription = benefitsAndDescription;
    }

    public String getRequirement() {
        return requirement;
    }

    public void setRequirement(String requirement) {
        this.requirement = requirement;
    }

    public String getHiringProcess() {
        return hiringProcess;
    }

    public void setHiringProcess(String hiringProcess) {
        this.hiringProcess = hiringProcess;
    }

    public String getHowToApply() {
        return howToApply;
    }

    public void setHowToApply(String howToApply) {
        this.howToApply = howToApply;
    }

    public String getJobPostImage() {
        return jobPostImage;
    }

    public void setJobPostImage(String jobPostImage) {
        this.jobPostImage = jobPostImage;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public boolean isApproved() {
        return isApproved;
    }

    public void setApproved(boolean isApproved) {
        this.isApproved = isApproved;
    }

    public JobPosts() {
    }

}
