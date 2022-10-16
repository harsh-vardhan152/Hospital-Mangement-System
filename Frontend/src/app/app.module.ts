import { NgModule } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
