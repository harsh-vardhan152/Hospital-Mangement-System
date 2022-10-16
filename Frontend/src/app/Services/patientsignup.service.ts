import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../Models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsignupService {

  constructor(private _http:HttpClient) { }
  public registerPatientFromRemote(patientsignup:Patient):Observable<any> {
    return this._http.post<any>("http://localhost:8181/api/v1/patients", patientsignup)
  }
}
