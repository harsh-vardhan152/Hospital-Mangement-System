import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationStatus } from '../Models/authentication-status.model';
import { Patient } from '../Models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientloginService {

  constructor(private httpClient: HttpClient) {}
  authenticated(
      username: string,
      password: string
  ): Observable<AuthenticationStatus> {
      let body = {
          username: username,
          password: password,
      };
      let headers = new HttpHeaders({
          'content-type': 'application/json',
      });
      return this.httpClient.post<AuthenticationStatus>(
          'http://localhost:8181/api/v1/patientlogin',
          body,
          {
              headers: headers,
          }
      );
  }
}
