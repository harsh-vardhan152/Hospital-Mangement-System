package com.portal.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

	@Entity
	@Table(name="dischargedpatient")
	public class DischargedPatient {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int d_id;
		@Column(name="P_name")
		private  String pName;
		@Column(name="D_name")
		private String d_name;
		@Column(name="D_time")
		
		private String d_time;
		@Column(name="D_date")
		private String d_date;
		@Column(name="Disease")
		private String disease;
		@Column(name="Confirm")
		private String confirm;
		
		public String getP_name() {
			return pName;
		}
		public void setP_name(String p_name) {
			this.pName = p_name;
		}
		public String getD_name() {
			return d_name;
		}
		public void setD_name(String d_name) {
			this.d_name = d_name;
		}
		public String getD_time() {
			return d_time;
		}
		public void setD_time(String d_time) {
			this.d_time = d_time;
		}
		public String getD_date() {
			return d_date;
		}
		public void setD_date(String d_date) {
			this.d_date = d_date;
		}
		public String getDisease() {
			return disease;
		}
		public void setDisease(String disease) {
			this.disease = disease;
		}
		public String getConfirm() {
			return confirm;
		}
		public void setConfirm(String confirm) {
			this.confirm = confirm;
		}
		
		
		public int getD_id() {
			return d_id;
		}
		public void setD_id(int d_id) {
			this.d_id = d_id;
		}
		public String getpName() {
			return pName;
		}
		public void setpName(String pName) {
			this.pName = pName;
		}
		public DischargedPatient(int d_id, String pName, String d_name, String d_time, String d_date, String disease,
				String confirm) {
			super();
			this.d_id = d_id;
			this.pName = pName;
			this.d_name = d_name;
			this.d_time = d_time;
			this.d_date = d_date;
			this.disease = disease;
			this.confirm = confirm;
		}
		public DischargedPatient()
		{
			
		}
		@Override
		public String toString() {
			return "DischargedPatient [d_id=" + d_id + ", pName=" + pName + ", d_name=" + d_name + ", d_time=" + d_time
					+ ", d_date=" + d_date + ", disease=" + disease + ", confirm=" + confirm + "]";
		}
		
	}


