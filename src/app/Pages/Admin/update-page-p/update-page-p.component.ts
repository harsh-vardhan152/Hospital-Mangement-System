import { PatientsService } from 'src/app/Services/patients.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientList } from 'src/app/Models/patient-list.model';
@Component({
  selector: 'app-update-page-p',
  templateUrl: './update-page-p.component.html',
  styleUrls: ['./update-page-p.component.css'],
})
export class UpdatePagePComponent implements OnInit {
  [x: string]: any;
  p_id!: number;
  patientlist: PatientList = new PatientList();

  constructor(
    private patientsservice: PatientsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.p_id = this.route.snapshot.params['p_id'];
    this.patientsservice.getPatientsById(this.p_id).subscribe(
      (data) => {
        this.patientlist = data;
      },
      (error) => {
        console.log(error);
        // swal.fire('Error', 'Something Wrong Happend', 'error');
      }
    );
  }
  onSubmit() {
    this.patientsservice.updatePatients(this.p_id, this.patientlist).subscribe(
      (data) => {
        this.registerDoctors();
        swal.fire('Success', 'successfully', 'success');
      },
      (error) => {
        console.log(error);
        swal.fire('Error', 'Something Wrong Happend', 'error');
      }
    );
  }
  registerDoctors() {
    swal.fire('Success', 'Doctor is updated success', 'success');
    this.router.navigate(['/patient']);

    (error: any) => {
      console.log(error);
      swal.fire('Error', 'Something Wrong Happend', 'error');
    };
    // swal.fire('Error', 'Doctor is updated success', 'error');
  }
}
