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
public class PatientAppointments {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long appointmentId;
	private String patientName; //implicitly assigned from User table
	private int age;			//implicitly assigned from User table
	private String gender;		//implicitly assigned from User table
	private String mobile;		//implicitly assigned from User table
	@Nullable
	private String symptom1;
	@Nullable
	private String symptom2;
	private String description;
	private String status;//1.Waiting 2.Assigned 3.Discharged >managed by Admin
	@Column(nullable = true)
	private int dId;			//id of assigned Doctor
	private String doctorName;	//name of assigned Doctor
	private Date appointmentDate;//assigned by admin
	
	public long getAppointmentId() {
		return appointmentId;
	}
	public void setAppointmentId(long appointmentId) {
		this.appointmentId = appointmentId;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getSymptom1() {
		return symptom1;
	}
	public void setSymptom1(String symptom1) {
		this.symptom1 = symptom1;
	}
	public String getSymptom2() {
		return symptom2;
	}
	public void setSymptom2(String symptom2) {
		this.symptom2 = symptom2;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getdId() {
		return dId;
	}
	public void setdId(int dId) {
		this.dId = dId;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public Date getAppointmentDate() {
		return appointmentDate;
	}
	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}
	public PatientAppointments(long appointmentId, String patientName, int age, String gender, String mobile,
			String symptom1, String symptom2, String description, String status, int dId, String doctorName,
			Date appointmentDate) {
		super();
		this.appointmentId = appointmentId;
		this.patientName = patientName;
		this.age = age;
		this.gender = gender;
		this.mobile = mobile;
		this.symptom1 = symptom1;
		this.symptom2 = symptom2;
		this.description = description;
		this.status = status;
		this.dId = dId;
		this.doctorName = doctorName;
		this.appointmentDate = appointmentDate;
	}
	public PatientAppointments() {
		super();
	}
	@Override
	public String toString() {
		return "PatientAppointments [appointmentId=" + appointmentId + ", patientName=" + patientName + ", age=" + age
				+ ", gender=" + gender + ", mobile=" + mobile + ", symptom1=" + symptom1 + ", symptom2=" + symptom2
				+ ", description=" + description + ", status=" + status + ", dId=" + dId + ", doctorName=" + doctorName
				+ ", appointmentDate=" + appointmentDate + "]";
	}
	
		
	
	

}
