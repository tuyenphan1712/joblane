package com.example.joblane.model.mapper;

public class UserUdateRequest {
    private FormData formData;

    public static class FormData {
        private String name;
        private String email;
        private String password;
        private String confirmPassword;
        private boolean agree;
        public boolean isAgree() {
            return agree;
        }
        public void setAgree(boolean agree) {
            this.agree = agree;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
        public String getConfirmPassword() {
            return confirmPassword;
        }
        public void setConfirmPassword(String confirmPassword) {
            this.confirmPassword = confirmPassword;
        }
        
    }

    public FormData getFormData() {
        return formData;
    }

    public void setFormData(FormData formData) {
        this.formData = formData;
    }
}
