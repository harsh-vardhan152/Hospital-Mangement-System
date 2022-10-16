import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationStatus } from 'src/app/Models/authentication-status.model';
import { DoctorLoginService } from 'src/app/Services/doctor-login.service';


@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  authStatus: AuthenticationStatus | undefined;
  constructor(
    private doctorloginService: DoctorLoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { }
  onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.password);
    sessionStorage.setItem("username",form.value.username);
    sessionStorage.setItem("password",form.value.password);
    

    this.doctorloginService
    .authenticated(form.value.username, form.value.password)
    .subscribe((res) => {
      this.authStatus = res;
      if (this.authStatus.authenticated) {
        alert("Successfully logged in!")
        this.router.navigate(['/doctor-home'], {relativeTo: this.route});
      }
      else {
        alert("Invalid Credentials!")
        this.router.navigate(['/doctor'], { relativeTo: this.route});
        form.reset();
      }
    });
  }

}
