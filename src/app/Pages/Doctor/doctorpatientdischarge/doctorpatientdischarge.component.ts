import { Component, OnInit } from '@angular/core';
import { DischargedPatients } from 'src/app/Models/discharged-patients.model';
import { DischargedPatientsService } from 'src/app/Services/discharged-patients.service';

@Component({
  selector: 'app-doctorpatientdischarge',
  templateUrl: './doctorpatientdischarge.component.html',
  styleUrls: ['./doctorpatientdischarge.component.css']
})
export class DoctorpatientdischargeComponent implements OnInit {

  disP!:DischargedPatients[];

  constructor(private disPServe:DischargedPatientsService) { }

  ngOnInit(): void {
    this.getDiscPatients();
  }

  private getDiscPatients(){
    this.disPServe.registerDishchargedPatientFromRemote().subscribe(data=>
      {
        this.disP=data;
      })    
  }
}
