package com.kleem.bullet.service;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kleem.bullet.model.ApplicationUser;


@Repository

public interface ApplicationUserRepository  extends JpaRepository<ApplicationUser, Long>{
	Optional<ApplicationUser> findByUsername(String username);
}
