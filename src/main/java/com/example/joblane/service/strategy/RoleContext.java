package com.example.joblane.service.strategy;

import org.springframework.stereotype.Component;

@Component
public class RoleContext {
    private RoleStrategy roleStrategy;

    public void setRoleStrategy(RoleStrategy roleStrategy) {
        this.roleStrategy = roleStrategy;
    }

    public void executeStrategy() {
        this.roleStrategy.execute();
    }
}
