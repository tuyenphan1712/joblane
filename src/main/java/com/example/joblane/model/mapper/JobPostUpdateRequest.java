package com.example.joblane.model.mapper;

import java.util.Date;

public class JobPostUpdateRequest {
    private String userId;
    private String userRole;
    private String employerId;
    public String getEmployerId() {
        return employerId;
    }

    public void setEmployerId(String employerId) {
        this.employerId = employerId;
    }

    private FormData formData;

    public static class FormData {
        private String title;
        private String category1;
        public String getCategory1() {
            return category1;
        }
        public void setCategory1(String category1) {
            this.category1 = category1;
        }
        private String category2;
        public String getCategory2() {
            return category2;
        }
        public void setCategory2(String category2) {
            this.category2 = category2;
        }
        private String category3;
        public String getCategory3() {
            return category3;
        }
        public void setCategory3(String category3) {
            this.category3 = category3;
        }
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
        public String getTitle() {
            return title;
        }
        public void setTitle(String title) {
            this.title = title;
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
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public FormData getFormData() {
        return formData;
    }

    public void setFormData(FormData formData) {
        this.formData = formData;
    }
}
