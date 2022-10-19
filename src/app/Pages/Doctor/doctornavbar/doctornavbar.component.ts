import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorList } from 'src/app/Models/doctor-list.model';
import { DoctorServicesService } from 'src/app/Services/doctor-services.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-doctornavbar',
  templateUrl: './doctornavbar.component.html',
  styleUrls: ['./doctornavbar.component.css']
})
export class DoctornavbarComponent implements OnInit {
  [x: string]: any;
  d_name!: string;
  doctorlist:any;

  constructor(private doctorlistservice: DoctorServicesService, 
    private route: ActivatedRoute,
    private router:Router,
    private app:AppComponent
    ) { }

  ngOnInit(): void {
    this.d_name=this.route.snapshot.params['d_name'];
    this.doctorlistservice.getDocByName(this.d_name).subscribe(data => {
      this.doctorlist=data;
    }, error =>console.log(error)
    );
  }

}
