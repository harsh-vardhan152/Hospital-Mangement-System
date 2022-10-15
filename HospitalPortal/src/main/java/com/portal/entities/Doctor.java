package com.portal.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.Nullable;


@Entity
@Table(name = "Doctor")
public class Doctor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long dId;
	private String doctorName;
	private String gender;
	private String qualification;
	private String mobile;
	private String applicationStatus; //Bydefault null 1.Approved 2.Rejected
	private String email;  //used to login
	@Nullable
	private String password; //assigned by admin after job approval
	public long getdId() {
		return dId;
	}
	public void setdId(long dId) {
		this.dId = dId;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Doctor(long dId, String doctorName, String gender, String qualification, String mobile, String email,
			String password) {
		super();
		this.dId = dId;
		this.doctorName = doctorName;
		this.gender = gender;
		this.qualification = qualification;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
	}
	public Doctor() {
		super();
	}
	@Override
	public String toString() {
		return "DoctorSignup [dId=" + dId + ", doctorName=" + doctorName + ", gender=" + gender + ", qualification="
				+ qualification + ", mobile=" + mobile + ", email=" + email + ", password=" + password + "]";
	}
	
	

}
