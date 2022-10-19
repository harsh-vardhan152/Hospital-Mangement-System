import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorList } from 'src/app/Models/doctor-list.model';
import { DoctorServicesService } from 'src/app/Services/doctor-services.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: DoctorList[] | undefined;
  constructor(private doctorlistservice: DoctorServicesService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors()
  {
    this.doctorlistservice.registerDoctorFromRemote().subscribe(data =>
      {
        this.doctors=data;
      });
  }
  doctorDetails(d_id:number)
  {
    this.router.navigate(['doctordetails',d_id]);
  }
  updateDoctor(d_id:number)
  {
    this.router.navigate(['update',d_id]);
  }
  addDoctor(){
    this.router.navigate(['update']);
  }
  deleteDoctor(d_id: number)
  {
    this.doctorlistservice.deleteDoctor(d_id).subscribe(data =>{
      console.log(data);
      this.getDoctors();
    })
  }

}
