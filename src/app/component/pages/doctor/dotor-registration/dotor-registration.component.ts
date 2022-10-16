import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dotor-registration',
  templateUrl: './dotor-registration.component.html',
  styleUrls: ['./dotor-registration.component.css']
})
export class DotorRegistrationComponent implements OnInit {
  addDoctorForm! : FormGroup
  constructor(private formBuilder : FormBuilder ) { }

  ngOnInit(): void {
    this.addDoctorForm=this.formBuilder.group({
       'address': new FormControl(),
       "contact_no": new FormControl(),
       "d_name": new FormControl(),
       "experience": new FormControl,
       "gender": new FormControl(),
       "password": new FormControl(),
       "specialization": new FormControl(),
       "salary": new FormControl(),
       "username": new FormControl(),
       "accept": new FormControl()


    })
  }


  addDoctor(){
    this.addDoctorForm.valueChanges.subscribe;
    console.log(this.addDoctorForm.value)

  }

}
