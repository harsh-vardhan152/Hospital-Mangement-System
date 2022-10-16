package com.portal.entities;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="patient")
public class PatientSignUp {
	@Id
	@GeneratedValue
	@Column(name="p_id")
	private int p_id;
	@Column(name="p_name")
	private String p_name;
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
	@Column(name="p_gender")
	private String p_gender;
	@Column(name="p_contact_no")
	private String p_contact_no;
	
	public PatientSignUp() {
	
	}
	public PatientSignUp(int p_id, String p_name,String username, String password, String p_gender, String p_contact_no) {
		super();
		this.p_id = p_id;
		this.p_name = p_name;
		this.username=username;
		this.password = password;
		this.p_gender = p_gender;
		this.p_contact_no = p_contact_no;
		
	}
	
	public int getP_id() {
		return p_id;
	}

	public void setP_id(int p_id) {
		this.p_id = p_id;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username=username;
	}

	public String getP_gender() {
		return p_gender;
	}

	public void setP_gender(String p_gender) {
		this.p_gender = p_gender;
	}

	public String getP_contact_no() {
		return p_contact_no;
	}

	public void setP_contact_no(String p_contact_no) {
		this.p_contact_no = p_contact_no;
	}

	public String getP_name() {
		return p_name;
	}

	public void setP_name(String p_name) {
		this.p_name = p_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
		
}