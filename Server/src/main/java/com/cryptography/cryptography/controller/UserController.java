package com.cryptography.cryptography.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cryptography.cryptography.model.UserMaster;
import com.cryptography.cryptography.services.UserRepo;




@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class UserController {
		@Autowired
		private UserRepo userRepo;
	
		@GetMapping("/getAllUser")
		public List<UserMaster> getUserMaster() { 			
				List<UserMaster> pLmObj=userRepo.findAll(); 
				return pLmObj;
		}
		
		@PostMapping("/addUser")
		public List<UserMaster> addNewUser(@RequestBody UserMaster userObj){
				userRepo.save(userObj);
				List<UserMaster> pLmObj=userRepo.findAll(); 
				return pLmObj;
		}
	
}
