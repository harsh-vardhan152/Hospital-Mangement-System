package com.portal.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="patient")
public class PatientLogin {
	@Id
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
	
	public PatientLogin() {
	
	}
	public String getUsername(){
		return username;
	}
	public void setUsername(String username){
		this.username=username;
	}
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}