import { DoctorAppointentComponent } from './Pages/Doctor/doctor-appointent/doctor-appointent.component';
import { AdmininvoiceComponent } from './Pages/Admin/admininvoice/admininvoice.component';
import { PatientinvoiceComponent } from './Pages/Paitent/patientinvoice/patientinvoice.component';
import { PatientdoctorassignedComponent } from './Pages/Paitent/patientdoctorassigned/patientdoctorassigned.component';
import { DoctorpatientlistComponent } from './Pages/Doctor/doctorpatientlist/doctorpatientlist.component';
import { DoctorpatientdischargeComponent } from './Pages/Doctor/doctorpatientdischarge/doctorpatientdischarge.component';
import { DoctorDashboardComponent } from './Pages/Doctor/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './Pages/Admin/admin-dashboard/admin-dashboard.component';
import { PatientChooseComponent } from './Pages/Home/patient-choose/patient-choose.component';
import { DoctorChooseComponent } from './Pages/Home/doctor-choose/doctor-choose.component';
import { ContactUsComponent } from './Pages/Home/Contact-us/contact-us/contact-us.component';
import { ServicesComponent } from './Pages/Home/services/services.component';
import { AboutUsComponent } from './Pages/Home/About/about-us/about-us.component';
import { AdminChooseComponent } from './Pages/Home/admin-choose/admin-choose.component';
import { PaitentSingupComponent } from './Pages/Paitent/paitent-singup/paitent-singup.component';
import { PaitentLoginComponent } from './Pages/Paitent/paitent-login/paitent-login.component';
import { DoctorSingupComponent } from './Pages/Doctor/doctor-singup/doctor-singup.component';
import { DoctorLoginComponent } from './Pages/Doctor/doctor-login/doctor-login.component';
import { SingupComponent } from './Pages/Admin/singup/singup.component';
import { HomeComponent } from './Pages/Home/Home/home.component';
import { LoginComponent } from './Pages/Admin/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './Pages/Admin/doctor/doctor.component';
import { PatientComponent } from './Pages/Admin/patient/patient.component';
import { AppointmentComponent } from './Pages/Admin/appointment/appointment.component';
import { PatientdashboardComponent } from './Pages/Paitent/patientdashboard/patientdashboard.component';
import {UpdatePage } from './Pages/Admin/update-page/update-page.component';
import { UpdateAppointmentComponent } from './Pages/Admin/update-appointment/update-appointment/update-appointment.component';
import { FeedbackComponent } from './Pages/Paitent/patient-Feedback/feedback/feedback.component';
import { UpdateAppointmentComponentD } from './Pages/Doctor/update-appointment/update-appointment/update-appointment.component';
import { UpdateAppointmentComponentP } from './Pages/Paitent/update-appointment/update-appointment.component';
import { FeedbackComponentAdmin } from './Pages/Admin/feedback/feedback.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'aboutus',
        component: AboutUsComponent,
      },
      {
        path: 'service',
        component: ServicesComponent,
      },
      {
        path: 'contactus',
        component: ContactUsComponent,
      },
    ],
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
    path: 'dsignup',
    component: DoctorSingupComponent,
  },
  {
    path: 'plogin',
    component: PaitentLoginComponent,
  },
  {
    path: 'psignup',
    component: PaitentSingupComponent,
  },
  {
    path: 'adminchoose',
    component: AdminChooseComponent,
  },
  {
    path: 'doctorchoose',
    component: DoctorChooseComponent,
  },
  {
    path: 'patientchoose',
    component: PatientChooseComponent,
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'doctor',
    component: DoctorComponent,
  },
  {
    path: 'patient',
    component: PatientComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },
  {
    path: 'admininvoice',
    component: AdmininvoiceComponent,
  },
  { path: 'doctordashboard', component: DoctorDashboardComponent },
  { path: 'doctordashboard/:username', component: DoctorDashboardComponent },
  {path:'update/:d_id',component:UpdatePage},
  {path:'update',component:UpdatePage},
  {path:'update-ap/:ap_id',component:UpdateAppointmentComponent},
  {path:'update-ap',component:UpdateAppointmentComponent},
  { path: 'patientdischarge', component: DoctorpatientdischargeComponent },
  { path: 'patientdischarge/:username', component: DoctorpatientdischargeComponent },
  { path: 'patientlist', component: DoctorpatientlistComponent },
  { path: 'Doctorappointemnt', component: DoctorAppointentComponent },
  { path: 'patientdashboard', component: PatientdashboardComponent },
  { path: 'doctorassigned', component: PatientdoctorassignedComponent },
  { path: 'invoice', component: PatientinvoiceComponent },
  { path: 'feedback', component: FeedbackComponent},
  {path:'update-apD/:ap_id',component:UpdateAppointmentComponentD},
  {path:'update-apD',component:UpdateAppointmentComponentD},
  {path:'update-apP/:ap_id',component:UpdateAppointmentComponentP},
  {path:'update-apP',component:UpdateAppointmentComponentP},
  { path: 'patientdashboard/:username', component: PatientdashboardComponent },
  { path: 'feedbackAdmin', component: FeedbackComponentAdmin}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
