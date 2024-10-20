package com.example.joblane.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.joblane.config.AuthenticationException;
import com.example.joblane.entity.Users;
import com.example.joblane.repository.UserRepository;
import com.example.joblane.service.strategy.AdminStrategy;
import com.example.joblane.service.strategy.EmployerStrategy;
import com.example.joblane.service.strategy.JobseekerStrategy;
import com.example.joblane.service.strategy.RoleContext;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleContext roleContext;

    public Users login(String email, String password) {
        Users user = userRepository.findByEmailAndPassword(email, password);
        if (user != null) {
            switch (user.getRole()) {
                case "Jobseeker":
                    roleContext.setRoleStrategy(new JobseekerStrategy());
                    break;
                case "Employer":
                    roleContext.setRoleStrategy(new EmployerStrategy());
                    break;
                case "Admin":
                    roleContext.setRoleStrategy(new AdminStrategy());
                    break;
                default:
                    throw new IllegalArgumentException("Invalid role: " + user.getRole());
            }
            roleContext.executeStrategy();
            return user;
        } else {
            throw new AuthenticationException("Invalid email or password");
        }
    }
}
