import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointments } from 'src/app/Models/appointments.model';
import { AppointmentsService } from 'src/app/Services/appointments.service';

@Component({
  selector: 'app-doctor-appointent',
  templateUrl: './doctor-appointent.component.html',
  styleUrls: ['./doctor-appointent.component.css']
})
export class DoctorAppointentComponent implements OnInit {
  appointmentList: Appointments[] = [];

  constructor(private apServe: AppointmentsService, 
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getAppointment();
  }

  private getAppointment(){
    this.apServe.registerAppointmentFromRemote().subscribe(data =>
      {
        this.appointmentList=data;
      });
  }
  deleteAppointment(ap_id: number)
  {
    this.apServe.deleteAppointment(ap_id).subscribe(data =>{
      console.log(data);
      this.getAppointment();
    })
  }
  updateAppointment(ap_id:number)
  {
    this.router.navigate(['update-apD',ap_id]);
  }
  } 
