import { Component, OnInit } from '@angular/core';
import { Appointments } from 'src/app/Models/appointments.model';
import { AppointmentsService } from 'src/app/Services/appointments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientdoctorassigned',
  templateUrl: './patientdoctorassigned.component.html',
  styleUrls: ['./patientdoctorassigned.component.css']
})
export class PatientdoctorassignedComponent implements OnInit {

  appointments!: Appointments[];
  getDoctors: any;
  constructor(private appointmentlistservice: AppointmentsService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAppointments();
  }
  private getAppointments()
  {
    this.appointmentlistservice.registerAppointmentFromRemote().subscribe(data =>
      {
        this.appointments=data;
      });
  }
  updateAppointment(ap_id:number)
  {
    this.router.navigate(['update-apP',ap_id]);
  }
  deleteAppointment(ap_id: number)
  {
    this.appointmentlistservice.deleteAppointment(ap_id).subscribe(data =>{
      console.log(data);
      this.getAppointments();
    })
  }
  addAppointment(){
    this.router.navigate(['update-apP']);
  }
}
