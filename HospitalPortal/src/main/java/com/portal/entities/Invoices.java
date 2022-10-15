package com.portal.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "invoices")
public class Invoices {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long invoiceId;
    private long patientId;
    private String patientName;
    private String mobile;
    private String address;
    private String doctorName;
    @Column(name = "START_DATE")
    private Date startDate;
    @Column(name = "END_DATE")
    private Date endDate;
    private Integer spentdays ;
    private String symptoms;
    private double roomcharge;
    private double doctorfees;
    private double medicinecost;
    private double othercost;
    
	public Long getInvoiceId() {
		return invoiceId;
	}
	public void setInvoiceId(Long invoiceId) {
		this.invoiceId = invoiceId;
	}
	public long getPatientId() {
		return patientId;
	}
	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public java.sql.Date getStartDate() {
		return startDate;
	}
	public void setStartDate(java.sql.Date startDate) {
		this.startDate = startDate;
	}
	public java.sql.Date getEndDate() {
		return endDate;
	}
	public void setEndDate(java.sql.Date endDate) {
		this.endDate = endDate;
	}
	public Integer getSpentdays() {
		return spentdays;
	}
	public void setSpentdays(Integer spentdays) {
		this.spentdays = spentdays;
	}
	public String getSymptoms() {
		return symptoms;
	}
	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}
	public double getRoomcharge() {
		return roomcharge;
	}
	public void setRoomcharge(double roomcharge) {
		this.roomcharge = roomcharge;
	}
	public double getDoctorfees() {
		return doctorfees;
	}
	public void setDoctorfees(double doctorfees) {
		this.doctorfees = doctorfees;
	}
	public double getMedicinecost() {
		return medicinecost;
	}
	public void setMedicinecost(double medicinecost) {
		this.medicinecost = medicinecost;
	}
	public double getOthercost() {
		return othercost;
	}
	public void setOthercost(double othercost) {
		this.othercost = othercost;
	}
	public Invoices(Long invoiceId, long patientId, String patientName, String mobile, String address,
			String doctorName, Date startDate, Date endDate, Integer spentdays, String symptoms, double roomcharge,
			double doctorfees, double medicinecost, double othercost) {
		super();
		this.invoiceId = invoiceId;
		this.patientId = patientId;
		this.patientName = patientName;
		this.mobile = mobile;
		this.address = address;
		this.doctorName = doctorName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.spentdays = spentdays;
		this.symptoms = symptoms;
		this.roomcharge = roomcharge;
		this.doctorfees = doctorfees;
		this.medicinecost = medicinecost;
		this.othercost = othercost;
	}
	public Invoices() {
		super();
	}
	@Override
	public String toString() {
		return "Invoices [invoiceId=" + invoiceId + ", patientId=" + patientId + ", patientName=" + patientName
				+ ", mobile=" + mobile + ", address=" + address + ", doctorName=" + doctorName + ", startDate="
				+ startDate + ", endDate=" + endDate + ", spentdays=" + spentdays + ", symptoms=" + symptoms
				+ ", roomcharge=" + roomcharge + ", doctorfees=" + doctorfees + ", medicinecost=" + medicinecost
				+ ", othercost=" + othercost + "]";
	}
    
    

}
