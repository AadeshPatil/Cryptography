package com.kleem.bullet.auth.handler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.naming.AuthenticationException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kleem.bullet.model.CustomResponseBody;

public class AuthenticationEntryPointJwt implements AuthenticationEntryPoint {

    private ObjectMapper objectMapper = new ObjectMapper();

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			org.springframework.security.core.AuthenticationException authException)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		response.setStatus(HttpStatus.FORBIDDEN.value());
		
        CustomResponseBody cm= new CustomResponseBody(400, "Auth Token Expired","failure", authException.getMessage());
        
        response.getOutputStream().println(objectMapper.writeValueAsString(cm));
		
	}
}