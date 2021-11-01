package com.cryptography.cryptography.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cryptography.cryptography.helper.TxtHelper;
import com.cryptography.cryptography.model.TextEnc;

@RestController
public class Encription {
	
	
	@PostMapping("/txtEnc")
	public String encrptText(@RequestBody TextEnc txtObj){
		String encryptedString = TxtHelper.encrypt(txtObj.getText(),txtObj.getKey()) ;
		return encryptedString;
	}
	
	
	@PostMapping("/txtDcrpt")
	public String decrptTxt(@RequestBody TextEnc txtObj){
		String decryptedString = TxtHelper.decrypt(txtObj.getText(),txtObj.getKey()) ;
		return decryptedString;
	}
}
