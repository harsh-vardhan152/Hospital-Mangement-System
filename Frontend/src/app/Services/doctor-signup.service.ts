import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Doctorsignup } from '../Models/doctorsignup.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorSignupService {

  constructor(private _http:HttpClient) { }

  public registerDoctorFromRemote(doctorsignup: Doctorsignup):Observable<any> {
      return this._http.post<any>("http://localhost:8181/api/v1/doctors", doctorsignup)
    }
}
