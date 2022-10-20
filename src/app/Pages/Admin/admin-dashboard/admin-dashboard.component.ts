import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Models/admin-login.model';
import { DoctorServicesService } from 'src/app/Services/doctor-services.service';
import { PatientsService } from 'src/app/Services/patients.service';
import { Appointments } from 'src/app/Models/appointments.model';
import { AppointmentsService } from 'src/app/Services/appointments.service';
import { DoctorList } from 'src/app/Models/doctor-list.model';
import { Patient } from 'src/app/Models/patient.model';
import { DischargedPatients } from 'src/app/Models/discharged-patients.model';
import { DischargedPatientsService } from 'src/app/Services/discharged-patients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  doctorCount: any;
  dpatientCount:any;
  appointmentCount:any;
  dList!: DoctorList[];
  pList!:Patient[];
  aList!:Appointments[];
  dpList!:DischargedPatients[];

  constructor(private dService:DoctorServicesService,private aService:AppointmentsService,private pService:PatientsService,private dpService:DischargedPatientsService) {
     
  }

  ngOnInit(): void {
    this.getDoctors();
    this.getPatients();
    this.getdisPatients();
    this.getAppointments();
    this.count();
  }

  private getDoctors()
  {
    this.dService.registerDoctorFromRemote().subscribe(data =>
      {
        this.dList=data;
      });
  }
  private getPatients(){
    this.pService.registerPatientsFromRemote().subscribe(data=>
      {
        this.pList=data;
      })
  }
  private getdisPatients(){
    this.dpService.registerDishchargedPatientFromRemote().subscribe(data=>
      {
        this.dpList=data;
      })
  }
  private getAppointments(){
    this.aService.registerAppointmentFromRemote().subscribe(data=>
      {
        this.aList=data;
      })
  }
  private count(){
    this.dService.unVDoctorsCount().subscribe(data=>
      {
        this.doctorCount=data;
      })
    this.aService.pendingCount().subscribe(data=>
      {
        this.appointmentCount=data;
      })
    this.dpService.Count().subscribe(data=>
      {
        this.dpatientCount=data;
      })
    
  }


}
