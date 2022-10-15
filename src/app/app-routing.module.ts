import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegisterComponent } from './component/pages/admin/admin-register/admin-register.component';
import { DotorRegistrationComponent } from './component/pages/doctor/dotor-registration/dotor-registration.component';


import { PatientRegisterComponent } from './component/pages/patient/patient-register/patient-register.component';

const routes: Routes = [
{path:"doctor/registration",component:DotorRegistrationComponent},
{path:"patient/registration", component:PatientRegisterComponent},
{path:"admin/registration" , component:AdminRegisterComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
