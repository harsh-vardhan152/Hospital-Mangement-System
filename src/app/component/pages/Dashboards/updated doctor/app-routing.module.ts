import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { PatientdischargeComponent } from './patientdischarge/patientdischarge.component';
import { PlistComponent } from './plist/plist.component';
const routes: Routes = [

  { path: '', redirectTo: 'doctordashboard', pathMatch: 'full' },
  {path: 'doctordashboard',component: DoctordashboardComponent},
  { path:'patientdischarge',component: PatientdischargeComponent},
  {path: 'plist',component: PlistComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
