package com.example.joblane.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "applications")
public class Applications {
    @Id
    private String id;
    @DBRef
    private Users userId;
    @DBRef
    private JobPosts jobPostId;

    private String cv;
    private String coverLetter;
    private String status;
    private Date applicationDate;

    @DBRef
    private JobSeekers jobSeekerId;

    public JobSeekers getJobSeekerId() {
        return jobSeekerId;
    }

    public void setJobSeekerId(JobSeekers jobSeekerId) {
        this.jobSeekerId = jobSeekerId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Users getUserId() {
        return userId;
    }

    public void setUserId(Users userId) {
        this.userId = userId;
    }

    public JobPosts getJobPostId() {
        return jobPostId;
    }

    public void setJobPostId(JobPosts jobPostId) {
        this.jobPostId = jobPostId;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    public String getCoverLetter() {
        return coverLetter;
    }

    public void setCoverLetter(String coverLetter) {
        this.coverLetter = coverLetter;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getApplicationDate() {
        return applicationDate;
    }

    public void setApplicationDate(Date applicationDate) {
        this.applicationDate = applicationDate;
    }

    public Applications(String id, Users userId, JobPosts jobPostId, String cv, String coverLetter, String status,
            Date applicationDate) {
        this.id = id;
        this.userId = userId;
        this.jobPostId = jobPostId;
        this.cv = cv;
        this.coverLetter = coverLetter;
        this.status = status;
        this.applicationDate = applicationDate;
    }
    public Applications(){
        
    }
}