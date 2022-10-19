import { Component, OnInit } from '@angular/core';
import { PaitentSingupComponent } from '../../Paitent/paitent-singup/paitent-singup.component';
import { PatientsService } from 'src/app/Services/patients.service';
import { Patient } from 'src/app/Models/patient.model';

@Component({
  selector: 'app-doctorpatientlist',
  templateUrl: './doctorpatientlist.component.html',
  styleUrls: ['./doctorpatientlist.component.css']
})
export class DoctorpatientlistComponent implements OnInit {

  pList!: Patient[];

  constructor(private pServe:PatientsService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients(){
    this.pServe.registerPatientsFromRemote().subscribe(data=>
      {
        this.pList=data;
      })
  }

}
