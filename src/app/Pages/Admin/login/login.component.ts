import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';
import { Admin } from 'src/app/Models/admin-login.model';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  admin = new Admin();
  msg = '';
  constructor(
    private _service: AdminRegistrationService,
    private _router: Router
  ) {}

  ngOnInit() {}
  loginAdmin(form: NgForm) {
    console.log(form.value.email, form.value.password);
    console.log(this.admin.emailId, this.admin.password);
    console.log(this.admin.emailId, this.admin.password, this.admin.userName);
    sessionStorage.setItem('email', form.value.email);
    sessionStorage.setItem('password', form.value.password);

    this._service.loginAdminFromRemote(this.admin).subscribe(
      (data: any) => {
        console.log('response recieved');
        //  alert('Login Success');
        // swal.fire('Success', 'User is Registered', 'success');
        swal.fire('Sucess', 'Login Success', 'success');
        this._router.navigate(['/dashboard']); //Update the dashboard here
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentials,please enter valid emailid and password';
        // alert(this.msg);
        swal.fire('Error', this.msg, 'error');
      }
    );
  }
  gotoregistration() {
    this._router.navigate(['/asingup']);
  }
}
