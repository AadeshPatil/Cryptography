package com.cryptography.cryptography.services;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cryptography.cryptography.model.UserMaster;

@Repository
public interface UserRepo extends JpaRepository<UserMaster, Long>{

}
