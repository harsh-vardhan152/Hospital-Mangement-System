import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationStatus } from 'src/app/Models/authentication-status.model';
import { DoctorLoginService } from 'src/app/Services/doctor-login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
})
export class DoctorLoginComponent implements OnInit {
  authStatus: AuthenticationStatus | undefined;
  constructor(
    private doctorloginService: DoctorLoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.password);
    sessionStorage.setItem('username', form.value.username);
    sessionStorage.setItem('password', form.value.password);

    this.doctorloginService
      .authenticated(form.value.username, form.value.password)
      .subscribe((res) => {
        this.authStatus = res;
        if (this.authStatus.authenticated) {
          swal.fire('Success', 'Successfully Logged In!', 'success');
          this.router.navigate(['/doctordashboard', this.authStatus.username], {
            relativeTo: this.route,
          });
        } else {
          swal.fire(
            'Error',
            'Something Wrong Happend or wait till admin approveed your request',
            'error'
          );
          this.router.navigate(['/dlogin'], { relativeTo: this.route });
          form.reset();
        }
      });
  }
}
