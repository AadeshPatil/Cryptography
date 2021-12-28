package com.crypto.project.controller;
import java.util.HashMap;
import java.util.NoSuchElementException;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import com.crypto.project.helpers.GetIp;
import com.crypto.project.helpers.TextHelper;
import com.crypto.project.model.Users;
import com.crypto.project.model.EncData;
import com.crypto.project.model.TextEncDcrtModel;
import com.crypto.project.service.EncDataStore;
import com.crypto.project.service.UsersRepository;


@RestController
@RequestMapping("/txt")
public class TextEncrpription {

	@Autowired
	private UsersRepository userServise;
	
	@Autowired
	private EncDataStore EncDStored;
	@Autowired 
	private HttpServletRequest request;
	
    @Autowired
    public void setRequest(HttpServletRequest request) {
        this.request = request;
    }


	
	@PostMapping("/encTxt")
	public ResponseEntity<Object> encrptTxt(@RequestBody TextEncDcrtModel txtObj) throws NoSuchElementException{
		  String EncTxt = TextHelper.encrypt(txtObj.getText(), txtObj.getKey());
		  
		  try {
			  String reciversList = txtObj.getUserId();
		      String[] array = reciversList.split(",");
		      for(String value:array) {
		    	  try {
		    	    	Optional<Users> userOptionall =  userServise.findByUserId(value);
		    	    	long userNumid = userOptionall.get().getUserNumId();
		    	    	EncData enObj = new EncData(0, EncTxt, txtObj.getTime(), userNumid, txtObj.getSenderName(),"text","","");
		    	        EncDStored.save(enObj);   	  
		    	  }catch (Exception e) {
		    		  e.getMessage();
					// TODO: handle exception
				}
		      }
		      return ResponseEntity.ok().build();
			
		  } catch (Exception e) {
				// TODO: handle exception
			}
		return null;


	}
	
	@PostMapping("/dcrtTxt")
	public ResponseEntity<Object> dcrptTxt(@RequestBody TextEncDcrtModel txtObj) throws NoSuchElementException {
		try {
			String EncTxt = TextHelper.decrypt(txtObj.getText(), txtObj.getKey());
			System.out.println(EncTxt);
			HashMap<String, String> map = new HashMap<>();
		    map.put("txt", EncTxt);
        	return new ResponseEntity<>(map, HttpStatus.OK);
			} catch (Exception e) {
			// TODO: handle exception
				e.getMessage();
		}
		return null;

			
	}
	

	
}
