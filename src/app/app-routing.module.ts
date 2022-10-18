import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegisterComponent } from './component/pages/admin/admin-register/admin-register.component';
import { DotorRegistrationComponent } from './component/pages/doctor/dotor-registration/dotor-registration.component';
import { HeaderComponent } from './component/pages/header/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


import { PatientRegisterComponent } from './component/pages/patient/patient-register/patient-register.component';
import { TestimonialsComponent } from './component/pages/testimonials/testimonials.component';
import { DoctorLoginComponent } from './component/pages/doctor/doctor-login/doctor-login.component';
import { PortfolioGalleryComponent } from './component/pages/portofolio/portfolio-gallery/portfolio-gallery.component';
import { DoctorDashboardComponent } from './component/pages/doctor/doctor-dashboard/doctor-dashboard.component';
import { FeedbackComponent } from './component/pages/feedback/feedback.component';
import { FpasswordComponent } from './component/pages/fpassword/fpassword.component';

const routes: Routes = [
{path:"doctor/registration",component:DotorRegistrationComponent},
{path:"patient/registration", component:PatientRegisterComponent},
{path:"admin/registration" , component:AdminRegisterComponent},
{path:"header", component: HeaderComponent},
{path:"testimonials" , component: TestimonialsComponent},
{path:"doctor/login", component: DoctorLoginComponent},
{path:"gallery" , component:PortfolioGalleryComponent},
{path:"doctor/dashboard" , component:DoctorDashboardComponent},
{path:"feedback" , component:FeedbackComponent},
{path:"password/forgot", component:FpasswordComponent}
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
