import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  addPatientForm!: FormGroup;
  constructor( private formBuilder : FormBuilder ) { }

  ngOnInit(): void {
    this.addPatientForm=this.formBuilder.group({
      'p_contact_no': new FormControl(),
      "username": new FormControl(),
      "password": new FormControl(),
      "p_name": new FormControl(),
      "p_gender": new FormControl()
    })
  }

  addPatient(){
    this.addPatientForm.valueChanges.subscribe;
    console.log(this.addPatientForm.value)
  }

}
