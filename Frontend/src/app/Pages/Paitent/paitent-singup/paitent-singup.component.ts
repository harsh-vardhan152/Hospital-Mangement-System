import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Models/patient.model';
import { PatientsignupService } from 'src/app/Services/patientsignup.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-paitent-singup',
  templateUrl: './paitent-singup.component.html',
  styleUrls: ['./paitent-singup.component.css']
})
export class PaitentSingupComponent implements OnInit {

newUser = new Patient;
msg = '';

constructor(private service:PatientsignupService
  ,private router:Router) 
{}

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerPatientFromRemote(this.newUser).subscribe(
      data =>{
     console.log("Response Received");
      this.msg="patient registration successful"
     alert(this.newUser.p_name +" you registered succesfully")
    //alert("Registration Successful!");
    this.router.navigate(['/patient'])
   },
   error => {
    console.log("exception occured")
    this.msg=error.error;
    
    alert('Invalid already Registered!!');
    }
    );
  
  }

}
