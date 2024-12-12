// src/main/java/com/example/shopapp/repository/UserRepository.java
package com.example.shopapp.repository;

import com.example.shopapp.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}
