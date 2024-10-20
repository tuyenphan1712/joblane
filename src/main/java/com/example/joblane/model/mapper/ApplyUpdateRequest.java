package com.example.joblane.model.mapper;

public class ApplyUpdateRequest {
    private String userId;
    private String jobSeekerId;
    private String jobPostId;
    public String getJobPostId() {
        return jobPostId;
    }

    public void setJobPostId(String jobPostId) {
        this.jobPostId = jobPostId;
    }

    private FormData formData;

    public static class FormData {
        private String fullName;
        private String email;
        private String phone;
        private String cv;
        private String coverLetter;
        public String getCoverLetter() {
            return coverLetter;
        }
        public void setCoverLetter(String coverLetter) {
            this.coverLetter = coverLetter;
        }
        public String getFullName() {
            return fullName;
        }
        public void setFullName(String fullName) {
            this.fullName = fullName;
        }
        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }
        public String getPhone() {
            return phone;
        }
        public void setPhone(String phone) {
            this.phone = phone;
        }
        public String getCv() {
            return cv;
        }
        public void setCv(String cv) {
            this.cv = cv;
        }
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getJobSeekerId() {
        return jobSeekerId;
    }

    public void setJobSeekerId(String jobSeekerId) {
        this.jobSeekerId = jobSeekerId;
    }

    public FormData getFormData() {
        return formData;
    }

    public void setFormData(FormData formData) {
        this.formData = formData;
    }
}
