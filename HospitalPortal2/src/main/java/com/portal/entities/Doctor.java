package com.portal.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.Nullable;


@Entity
@Table(name = "doctor")
public class Doctor {
	@Id
	@GeneratedValue
	private int d_id;
	@Column(name="d_name")
	private String doctorName;
	@Column(name="gender")
	private String gender;
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
	@Column(name="contact_no")
	private String contact_no;
	@Column(name="Address")
	private String address;
	@Column(name="Specialization")
	private String specialization;
	@Column(name="Experiance")
	private String experiance;
	@Column(name="Accept")
	private  String accept;
	@Column(name="Salary")
    private String salary;
	
	public Doctor() {
		
	}

	public Doctor(int d_id, String d_name, String gender, String username, String password, String contact_no,
			String address, String specialization, String experiance, String accept, String salary) {
		super();
		this.d_id = d_id;
		this.doctorName = d_name;
		this.gender = gender;
		this.username = username;
		this.password = password;
		this.contact_no = contact_no;
		this.address = address;
		this.specialization = specialization;
		this.experiance = experiance;
		this.accept = accept;
		this.salary = salary;
	}

	public int getD_id() {
		return d_id;
	}

	public void setD_id(int d_id) {
		this.d_id = d_id;
	}

	public String getD_name() {
		return doctorName;
	}

	public void setD_name(String d_name) {
		this.doctorName = d_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
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

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getExperiance() {
		return experiance;
	}

	public void setExperiance(String experiance) {
		this.experiance = experiance;
	}

	public String getAccept() {
		return accept;
	}

	public void setAccept(String accept) {
		this.accept = accept;
	}

	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}


}
