package com.kleem.bullet.service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kleem.bullet.model.LoginInfo;

@Repository
public interface LoginInfoRepository extends JpaRepository<LoginInfo, String>{
	//public List<Users> findAll();
}