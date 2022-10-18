import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PatientRegisterComponent } from './component/pages/patient/patient-register/patient-register.component';
import { AdminRegisterComponent } from './component/pages/admin/admin-register/admin-register.component';

import { DotorRegistrationComponent } from './component/pages/doctor/dotor-registration/dotor-registration.component';
import { DoctorLoginComponent } from './component/pages/doctor/doctor-login/doctor-login.component';
import { HeaderComponent } from './component/pages/header/header/header.component';
import { TestimonialsComponent } from './component/pages/testimonials/testimonials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioGalleryComponent } from './component/pages/portofolio/portfolio-gallery/portfolio-gallery.component';
import { DoctorDashboardComponent } from './component/pages/doctor/doctor-dashboard/doctor-dashboard.component';
import { FpasswordComponent } from './component/pages/fpassword/fpassword.component';
import { FeedbackComponent } from './component/pages/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    DotorRegistrationComponent,
    
    PatientRegisterComponent,
    AdminRegisterComponent,
    
    DotorRegistrationComponent,
         DoctorLoginComponent,
         HeaderComponent,
         TestimonialsComponent,
         PortfolioGalleryComponent,
         DoctorDashboardComponent,
         FpasswordComponent,
         FeedbackComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
