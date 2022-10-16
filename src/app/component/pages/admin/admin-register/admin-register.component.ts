import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  addAdminForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.addAdminForm=this.formBuilder.group({
      'email_id':new  FormControl(),
      'password': new FormControl(),
      "user_name": new FormControl()


    })
  }
  addAdmin(){
    this.addAdminForm.valueChanges.subscribe
    console.log(this.addAdminForm.value)
    
  }

}
