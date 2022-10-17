import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorassignedComponent } from './doctorassigned/doctorassigned.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {path: '', redirectTo: 'patientdashboard', pathMatch:'full'},
  {path: 'patientdashboard',component: PatientdashboardComponent},
  {path: "doctorassigned", component: DoctorassignedComponent},
  {path: 'invoice',component: InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
