package com.example.joblane.entity;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Document(collection = "jobseekers")
public class JobSeekers {
    @Id
    private String id;
    private String DoB;
    private String Address;
    private String Bio;
    private String CV;
    private String avatar;
    private String Phone;
    private List<String> appliedPosts = new ArrayList<>();

    public List<String> getAppliedPosts() {
        return appliedPosts;
    }

    public void setAppliedPosts(List<String> appliedPosts) {
        this.appliedPosts = appliedPosts;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    @DBRef
    @JsonBackReference
    private Users userId;

    // @DBRef
    // private CV CVId;
    // getters and setters...
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDoB() {
        return DoB;
    }

    public void setDoB(String doB) {
        DoB = doB;
    }
   

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getBio() {
        return Bio;
    }

    public void setBio(String bio) {
        Bio = bio;
    }

    public String getCV() {
        return CV;
    }

    public void setCV(String cV) {
        CV = cV;
    }

    public Users getUserId() {
        return userId;
    }

    public void setUserId(Users userId) {
        this.userId = userId;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public void addAppliedPost(String jobPostId) {
        if (this.appliedPosts == null) {
            this.appliedPosts = new ArrayList<>();
        }
        this.appliedPosts.add(jobPostId);
    }
}
