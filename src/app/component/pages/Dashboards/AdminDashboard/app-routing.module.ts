import { PatientlistComponent } from './DoctorDashboard/patientlist/patientlist.component';
import { PatientdischargeComponent } from './DoctorDashboard/patientdischarge/patientdischarge.component';
import { DoctordashboardComponent } from './DoctorDashboard/doctordashboard/doctordashboard.component';
import { NavigationComponent } from './AdminDashboard/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardsComponent } from './AdminDashboard/admin-dashboards/admin-dashboards.component';
import { DoctorComponent } from './AdminDashboard/doctor/doctor.component';
import { PatientComponent } from './AdminDashboard/patient/patient.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path:'dashboard',component:AdminDashboardsComponent
    },
    {
      path:'doctor',component:DoctorComponent
    },
    {
      path:'patient',component:PatientComponent
    }
   {
      path:'appointment',component:AppointmentComponent
    }
];/*
const routes:Routes=[{
  path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path:'dashboard',component:DoctordashboardComponent
    },
    {
      path:'discharge',component:PatientdischargeComponent
    },
    {
      path:'list',component:PatientlistComponent
}
 ];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
