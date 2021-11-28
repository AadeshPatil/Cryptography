package com.kleem.bullet.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="user_master")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long userNumId;
	String fName;
	String lName;
	Long mobileNo;  
	String password;
	String emailId;
	String state;
	String city;
	String isActive;
	String role;
	String userId;
	String userType;
	String fatherName;
	String completeName;
	@JsonIgnore
	String token;
	
	public Users(Long userNumId, String fName, String lName, Long mobileNo, String password, String emailId,
			String state, String city, String isActive, String role, String userId, String userType, String fatherName,
			String completeName, String token) {
		super();
		this.userNumId = userNumId;
		this.fName = fName;
		this.lName = lName;
		this.mobileNo = mobileNo;
		this.password = password;
		this.emailId = emailId;
		this.state = state;
		this.city = city;
		this.isActive = isActive;
		this.role = role;
		this.userId = userId;
		this.userType = userType;
		this.fatherName = fatherName;
		this.completeName = completeName;
		this.token = token;
	}
	@Override
	public String toString() {
		return "Users [userNumId=" + userNumId + ", fName=" + fName + ", lName=" + lName + ", mobileNo=" + mobileNo
				+ ", password=" + password + ", emailId=" + emailId + ", state=" + state + ", city=" + city
				+ ", isActive=" + isActive + ", role=" + role + ", userId=" + userId + ", userType=" + userType
				+ ", fatherName=" + fatherName + ", completeName=" + completeName + ", token=" + token
				+ ", getUserNumId()=" + getUserNumId() + ", getfName()=" + getfName() + ", getlName()=" + getlName()
				+ ", getMobileNo()=" + getMobileNo() + ", getPassword()=" + getPassword() + ", getEmailId()="
				+ getEmailId() + ", getState()=" + getState() + ", getCity()=" + getCity() + ", getIsActive()="
				+ getIsActive() + ", getRole()=" + getRole() + ", getUserId()=" + getUserId() + ", getUserType()="
				+ getUserType() + ", getFatherName()=" + getFatherName() + ", getCompleteName()=" + getCompleteName()
				+ ", getToken()=" + getToken() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	public Long getUserNumId() {
		return userNumId;
	}
	public void setUserNumId(Long userNumId) {
		this.userNumId = userNumId;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public Long getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(Long mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getIsActive() {
		return isActive;
	}
	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getFatherName() {
		return fatherName;
	}
	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}
	public String getCompleteName() {
		return completeName;
	}
	public void setCompleteName(String completeName) {
		this.completeName = completeName;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
}