import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctorsignup } from 'src/app/Models/doctorsignup.model';
import { DoctorSignupService } from 'src/app/Services/doctor-signup.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-singup',
  templateUrl: './doctor-singup.component.html',
  styleUrls: ['./doctor-singup.component.css'],
})
export class DoctorSingupComponent implements OnInit {
  doctorsignup = new Doctorsignup();
  msg = '';

  constructor(private _service: DoctorSignupService, private _router: Router) {}

  ngOnInit(): void {}

  registerDoctor() {
    this._service.registerDoctorFromRemote(this.doctorsignup).subscribe(
      (data) => {
        console.log('Response received');
        swal.fire(
          'Success',
          this.doctorsignup.d_name + 'you registered successfully',
          'success'
        );
        this._router.navigate(['/dlogin']);
      },
      (error) => {
        console.log('Exception occured');
        console.log(
          this.doctorsignup.d_name,
          this.doctorsignup.address,
          this.doctorsignup.username
        );
        this.msg = error.error;

        swal.fire('Error', 'Something Wrong Happend', 'error');
      }
    );
  }
}
