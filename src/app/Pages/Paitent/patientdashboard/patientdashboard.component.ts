import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient.model';
import { PatientsService  } from 'src/app/Services/patients.service';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {

  [x: string]: any;
  username!: string;
  patientList:Patient=new Patient();
  constructor(private pServe:PatientsService, private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['username'];
    this.pServe.getPatientsByUsername(this.username).subscribe(data => {
      this.patientList=data;
    }, error =>console.log(error)
    );
  }

}
