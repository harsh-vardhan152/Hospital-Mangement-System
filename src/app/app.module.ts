import { PatientComponent } from './Pages/Admin/patient/patient.component';
import { AppointmentComponent } from './Pages/Admin/appointment/appointment.component';
import { DoctorComponent } from './Pages/Admin/doctor/doctor.component';
import { NavigationComponent } from './Pages/Admin/navigation/navigation.component';
import { TestimonialsComponent } from './Pages/Home/testimonials/testimonials.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/Admin/login/login.component';
import { AboutUsComponent } from './Pages/Home/About/about-us/about-us.component';
import { ContactUsComponent } from './Pages/Home/Contact-us/contact-us/contact-us.component';
import { HomeComponent } from './Pages/Home/Home/home.component';
import { NavbarComponent } from './Components/navbar/navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SingupComponent } from './Pages/Admin/singup/singup.component';
import { DoctorLoginComponent } from './Pages/Doctor/doctor-login/doctor-login.component';
import { DoctorSingupComponent } from './Pages/Doctor/doctor-singup/doctor-singup.component';
import { PaitentSingupComponent } from './Pages/Paitent/paitent-singup/paitent-singup.component';
import { PaitentLoginComponent } from './Pages/Paitent/paitent-login/paitent-login.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ServicesComponent } from './Pages/Home/services/services.component';
import { AdminChooseComponent } from './Pages/Home/admin-choose/admin-choose.component';
import { DoctorChooseComponent } from './Pages/Home/doctor-choose/doctor-choose.component';
import { PatientChooseComponent } from './Pages/Home/patient-choose/patient-choose.component';
import { PortfolioComponent } from './Pages/Home/portfolio/portfolio.component';
import { AdminDashboardComponent } from './Pages/Admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './Pages/Doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctornavbarComponent } from './Pages/Doctor/doctornavbar/doctornavbar.component';
import { DoctorpatientdischargeComponent } from './Pages/Doctor/doctorpatientdischarge/doctorpatientdischarge.component';
import { DoctorpatientlistComponent } from './Pages/Doctor/doctorpatientlist/doctorpatientlist.component';
import { PatientnavbarComponent } from './Pages/Paitent/patientnavbar/patientnavbar.component';
import { PatientdashboardComponent } from './Pages/Paitent/patientdashboard/patientdashboard.component';
import { PatientdoctorassignedComponent } from './Pages/Paitent/patientdoctorassigned/patientdoctorassigned.component';
import { PatientinvoiceComponent } from './Pages/Paitent/patientinvoice/patientinvoice.component';
import { AdmininvoiceComponent } from './Pages/Admin/admininvoice/admininvoice.component';
import { DoctorAppointentComponent } from './Pages/Doctor/doctor-appointent/doctor-appointent.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {UpdatePage } from './Pages/Admin/update-page/update-page.component';
import { UpdateAppointmentComponent } from './Pages/Admin/update-appointment/update-appointment/update-appointment.component';
import { FeedbackComponent } from './Pages/Paitent/patient-Feedback/feedback/feedback.component';
import { UpdateAppointmentComponentD } from './Pages/Doctor/update-appointment/update-appointment/update-appointment.component';
import { UpdateAppointmentComponentP } from './Pages/Paitent/update-appointment/update-appointment.component';
import { FeedbackComponentAdmin } from './Pages/Admin/feedback/feedback.component';
import { FeedbackpageComponent } from './Pages/Home/feedbackpage/feedbackpage.component';
import { UpdatePagePComponent } from './Pages/Admin/update-page-p/update-page-p.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    NavbarComponent,
    SingupComponent,
    DoctorLoginComponent,
    DoctorSingupComponent,
    PaitentSingupComponent,
    PaitentLoginComponent,
    FooterComponent,
    TestimonialsComponent,
    ServicesComponent,
    AdminChooseComponent,
    DoctorChooseComponent,
    PatientChooseComponent,
    PortfolioComponent,
    AdminDashboardComponent,
    NavigationComponent,
    DoctorDashboardComponent,
    DoctornavbarComponent,
    DoctorpatientdischargeComponent,
    DoctorpatientlistComponent,
    DoctorComponent,
    AppointmentComponent,
    PatientComponent,
    PatientnavbarComponent,
    PatientdashboardComponent,
    PatientdoctorassignedComponent,
    PatientinvoiceComponent,
    AdmininvoiceComponent,
    DoctorAppointentComponent,
    UpdatePage,
    UpdateAppointmentComponent,
    FeedbackComponent,
    UpdateAppointmentComponentD,
    UpdateAppointmentComponentP,
    FeedbackComponentAdmin,
    FeedbackpageComponent,
    UpdatePagePComponent

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
