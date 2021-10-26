package com.cryptography.cryptography.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name="user_master")
public class UserMaster {
	@Id
	@GeneratedValue
	private Long id;	
	private String userId;
	private String password;
	private String name;

	public String getName() {
		return name;
	}
	public UserMaster() {
		super();
		// TODO Auto-generated constructor stub
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public UserMaster(Long id, String userId, String password, String name) {
		super();
		this.id = id;
		this.userId = userId;
		this.password = password;
		this.name = name;
	}
}
