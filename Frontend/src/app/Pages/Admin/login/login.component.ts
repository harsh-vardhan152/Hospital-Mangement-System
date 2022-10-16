import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';
import { Admin } from 'src/app/Models/admin-login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  admin=new Admin();
  msg='';
   constructor(private _service : AdminRegistrationService, private _router : Router) { }
 
   ngOnInit(){
 
   }
   loginAdmin(form: NgForm){
    console.log(form.value.email, form.value.password);
    console.log(this.admin.emailId,this.admin.password);
    console.log(this.admin.emailId,this.admin.password,this.admin.userName);
    sessionStorage.setItem("email",form.value.email);
    sessionStorage.setItem("password",form.value.password);
    
     this._service.loginAdminFromRemote(this.admin).subscribe(
       data =>{console.log("response recieved");
       alert('loginsuccess');
      this._router.navigate(['/adminDashboard']) //Update the dashboard here

     } ,
       error => {
         console.log("exception occured");
       this.msg="Bad credentials,please enter valid emailid and password";
       alert(this.msg);
       }
       )
   }
   gotoregistration(){
     this._router.navigate(['/registration'])
   }
   
}
