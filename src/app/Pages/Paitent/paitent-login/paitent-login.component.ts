import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationStatus } from 'src/app/Models/authentication-status.model';
import { Patient } from 'src/app/Models/patient.model';
import { PatientloginService } from 'src/app/Services/patientlogin.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-paitent-login',
  templateUrl: './paitent-login.component.html',
  styleUrls: ['./paitent-login.component.css'],
})
export class PaitentLoginComponent implements OnInit {
  authStatus: AuthenticationStatus | undefined;
  constructor(
    private patientloginService: PatientloginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  patientlogin: Patient = new Patient();
  onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.password);
    sessionStorage.setItem('username', form.value.username);
    sessionStorage.setItem('password', form.value.password);

    this.patientloginService
      .authenticated(form.value.username, form.value.password)
      .subscribe((res) => {
        this.authStatus = res;
        if (this.authStatus.authenticated) {
          swal.fire('Success', 'successfully', 'success');
          this.router.navigate(
            ['/patientdashboard', this.authStatus.username],
            { relativeTo: this.route }
          );
        } else {
          swal.fire('Error', 'Something Wrong Happend', 'error');
          this.router.navigate(['/plogin'], { relativeTo: this.route });
          form.reset();
        }
      });
  }
}
