import { Component, OnInit } from '@angular/core';
import { PaitentSingupComponent } from '../paitent-singup/paitent-singup.component';
import { PatientsService  } from 'src/app/Services/patients.service';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
