import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorServicesService } from 'src/app/Services/doctor-services.service';
import { DoctorList } from 'src/app/Models/doctor-list.model';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  [x: string]: any;
  d_name!: string;
  doctorlist: DoctorList=new DoctorList();

  constructor(private doctorlistservice: DoctorServicesService, 
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.d_name=this.route.snapshot.params['username'];
    this.doctorlistservice.getDocByName(this.d_name).subscribe(data => {
      this.doctorlist=data;
    }, error =>console.log(error)
    );
  }

}
