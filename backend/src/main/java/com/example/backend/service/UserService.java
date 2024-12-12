// src/main/java/com/example/shopapp/service/UserService.java
package com.example.shopapp.service;

import com.example.shopapp.model.User;
import com.example.shopapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> login(String email, String password) {
        return userRepository.findByEmail(email).filter(user -> user.getPassword().equals(password));
    }
}
