package com.portal.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.Nullable;

@Entity
@Table(name = "appointments")
public class Appointment {
	
	@Id
	@GeneratedValue
	@Column(name="AP_ID ")
	private int ap_id ;
	
	@Column(name="P_name ")
	private String p_name;
	@Column(name="D_name ")
	private String d_name;

	@Column(name="ADDRESS  ")
	private String address;
	@Column(name=" Gender")
	private String gender;
	@Column(name="AP_DATE ")
	
	private String ap_date  ;
	@Column(name="AP_TIME ")
	
	private String ap_time ;
	
	@Column(name="Disease ")
	private String disease ;

	public int getAp_id() {
		return ap_id;
	}

	public void setAp_id(int ap_id) {
		this.ap_id = ap_id;
	}

	public String getP_name() {
		return p_name;
	}

	public void setP_name(String p_name) {
		this.p_name = p_name;
	}

	public String getD_name() {
		return d_name;
	}

	public void setD_name(String d_name) {
		this.d_name = d_name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAp_date() {
		return ap_date;
	}

	public void setAp_date(String ap_date) {
		this.ap_date = ap_date;
	}

	public String getAp_time() {
		return ap_time;
	}

	public void setAp_time(String ap_time) {
		this.ap_time = ap_time;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public Appointment(int ap_id, String p_name, String d_name, String address, String gender, String ap_date,
			String ap_time, String disease) {
		super();
		this.ap_id = ap_id;
		this.p_name = p_name;
		this.d_name = d_name;
		this.address = address;
		this.gender = gender;
		this.ap_date = ap_date;
		this.ap_time = ap_time;
		this.disease = disease;
	}

	public Appointment()
	{
		
	}

}
