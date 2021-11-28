package com.kleem.bullet.controller;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kleem.bullet.model.ApplicationUser;
import com.kleem.bullet.model.Users;
import com.kleem.bullet.service.ApplicationUserRepository;
import com.kleem.bullet.service.UsersRepository;


@RequestMapping("/users")
@RestController
public class UsersController {

	@Autowired
	//private UsersService usersService;
	private UsersRepository userRepository;
	//private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private ApplicationUserRepository applicationUserRepository;
	@Autowired
	Environment env;

	

	@GetMapping("/fetchUA/{userType}")
	public List<Users> retrieveByUserType(@PathVariable String userType) {
		System.out.println("userType : "+userType);
		return userRepository.findByUserType(userType);
	}
	@GetMapping("/fetchUA")
	public List<Users> retrieveAllUsers() {
		System.out.println("hello");
		return userRepository.findAll();
	}

	
	@GetMapping("/fetchU/{id}")
	public Optional<Users> retriveUser(@PathVariable long id) {
		System.out.println("hello");
		return userRepository.findById(id);
	}
	
	@GetMapping("/fetchUN/{userNumId}")
	public Users retriveUserByUserNumId(@PathVariable long userNumId) {
		System.out.println("hello");
		return userRepository.findByUserNumId(userNumId);
	}
	
	@GetMapping("/fetchUId/{userId}")
	public Optional<Users> retriveUser(@PathVariable String userId) {
		System.out.println("hello");
		return userRepository.findByUserId(userId);
	}
	
	@PostMapping("/updateUser")
	
	public ResponseEntity<Object> updateUser(@RequestBody Users user) {

		//user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		ApplicationUser appUser =new ApplicationUser();
	    ApplicationUser optionalAppUser = applicationUserRepository.findByUsername(user.getUserId()).get();
	    optionalAppUser.setRole(user.getRole());
	    //optionalAppUser.setPassword(user.getPassword());
	    applicationUserRepository.save(optionalAppUser);
		userRepository.save(user);
	
		return ResponseEntity.ok().build();
	}
	@PostMapping("/signUp")
	
	public ResponseEntity<Object> addUser(@RequestBody Users user) {
			
		String txtPwd=user.getPassword();				
		user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		ApplicationUser appUser =new ApplicationUser();
		appUser.setUsername(user.getUserId());
		appUser.setPassword(user.getPassword());
		appUser.setRole(user.getRole());
		applicationUserRepository.save(appUser);
		userRepository.save(user);
		return ResponseEntity.ok().build();

	}
//	 @PostMapping("/sign-up")
//	    public void signUp(@RequestBody ApplicationUser user) {
//	        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
//	        applicationUserRepository.save(user);
//	    }
	 
	 @PostMapping("/UpdPwd")
	    public ResponseEntity<Object> updUserPassword(@RequestBody Users user) {
		 String userPassword = user.getPassword();
			user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
			ApplicationUser appUser =new ApplicationUser();
		    ApplicationUser optionalAppUser = applicationUserRepository.findByUsername(user.getUserId()).get();
		    //optionalAppUser.setRole(user.getRole());
		    optionalAppUser.setPassword(user.getPassword());
		    applicationUserRepository.save(optionalAppUser);
			userRepository.save(user);
			return ResponseEntity.ok().build();
	    }
	 
		
	 
	 static char[] generatePassword(int len) 
	    { 
	        System.out.println("Generating password using random() : "); 
	        System.out.print("Your new password is : "); 
	  
	        // A strong password has Cap_chars, Lower_chars, 
	        // numeric value and symbols. So we are using all of 
	        // them to generate our password 
	        String Capital_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
	        String Small_chars = "abcdefghijklmnopqrstuvwxyz"; 
	        String numbers = "0123456789"; 
	                String symbols = "!@#$%^&*_=+-/.?<>)"; 
	  
	  
	        //String values = Capital_chars + Small_chars + 
	          //              numbers + symbols; 
	  
	                String values = numbers;
	                
	        // Using random method 
	        Random rndm_method = new Random(); 
	  
	        char[] password = new char[len]; 
	  
	        for (int i = 0; i < len; i++) 
	        { 
	            // Use of charAt() method : to get character value 
	            // Use of nextInt() as it is scanning the value as int 
	            password[i] = 
	              values.charAt(rndm_method.nextInt(values.length())); 
	  
	        } 
	        System.out.println(password);
	        return password; 
	    }
	 
	 public void store(String token,Long userNumId){
	    	Users user=userRepository.findByUserNumId(userNumId);
	    	if(user.getToken() == null) {
	    		user.setToken(token);
	    	}else{
	    		user.setToken(token);
	    	}
	    	userRepository.save(user);
	    }
	   
	 public void logout(Long userNumId){
		   Users user=userRepository.findByUserNumId(userNumId);
		   user.setToken(null);
		   userRepository.save(user);
	   }
	   
	 @PostMapping("/logout")
		
public ResponseEntity<Object> logout(@RequestBody Users user) {
	 return null;
	 }
}
