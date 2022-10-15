import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PatientRegisterComponent } from './component/pages/patient/patient-register/patient-register.component';
import { AdminRegisterComponent } from './component/pages/admin/admin-register/admin-register.component';

import { DotorRegistrationComponent } from './component/pages/doctor/dotor-registration/dotor-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    DotorRegistrationComponent,
    
    PatientRegisterComponent,
    AdminRegisterComponent,
    
    DotorRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
