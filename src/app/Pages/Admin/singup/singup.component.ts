import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../../Models/admin-login.model';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  admin = new Admin();
  msg='';

  constructor(private _service : AdminRegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerAdmin(){
    this._service.registerAdminFromRemote(this.admin).subscribe(
      data =>{
        console.log("response recieved");
        alert('signup successfull');
        this._router.navigate(['/adminlogin'])
        
      } ,
      error => {
        console.log("exception occured");
        this.msg=error.error;
      }
      )
  }

}
