import { PaitentSingupComponent } from './Pages/Paitent/paitent-singup/paitent-singup.component';
import { PaitentLoginComponent } from './Pages/Paitent/paitent-login/paitent-login.component';
import { DoctorSingupComponent } from './Pages/Doctor/doctor-singup/doctor-singup.component';
import { DoctorLoginComponent } from './Pages/Doctor/doctor-login/doctor-login.component';
import { SingupComponent } from './Pages/Admin/singup/singup.component';
import { HomeComponent } from './Pages/Home/Home/home.component';
import { LoginComponent } from './Pages/Admin/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'adminlogin',
    component: LoginComponent,
  },
  {
    path: 'asignup',
    component: SingupComponent,
  },
  {
    path: 'dlogin',
    component: DoctorLoginComponent,
  },
  {
    path: 'dsingup',
    component: DoctorSingupComponent,
  },
  {
    path: 'plogin',
    component: PaitentLoginComponent,
  },
  {
    path: 'psingup',
    component: PaitentSingupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
