package com.portal.entities;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

@Entity
@Table(name = "User")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userId;
	private String fullname;
	private Date dob;
	private String gender;
	private long mobile;
	private String bloodgroup;
	private String address;
	private String username;
	private String password;
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getBloodgroup() {
		return bloodgroup;
	}
	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public User(long userId, String fullname, Date dob, String gender, long mobile, String bloodgroup,
			String address, String username, String password) {
		super();
		this.userId = userId;
		this.fullname = fullname;
		this.dob = dob;
		this.gender = gender;
		this.mobile = mobile;
		this.bloodgroup = bloodgroup;
		this.address = address;
		this.username = username;
		this.password = password;
	}
	public User() {
		super();
	}
	@Override
	public String toString() {
		return "UserSignup [userId=" + userId + ", fullname=" + fullname + ", dob=" + dob + ", gender=" + gender
				+ ", mobile=" + mobile + ", bloodgroup=" + bloodgroup + ", address=" + address + ", username="
				+ username + ", password=" + password + "]";
	}
	
		

}
