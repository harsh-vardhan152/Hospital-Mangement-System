import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient.model';
import { PatientsService } from 'src/app/Services/patients.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  patients: Patient[] = [];
  constructor(
    private patientslistservice: PatientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPatients();
  }
  private getPatients() {
    this.patientslistservice.registerPatientsFromRemote().subscribe((data) => {
      this.patients = data;
    });
  }
  updatePatients(p_id: number) {
    this.router.navigate(['/upadatepatient', p_id]);
  }
  deletePatients(p_id: number) {
    this.patientslistservice.deletePatients(p_id).subscribe((data) => {
      console.log(data);
      this.getPatients();
    });
  }
}
