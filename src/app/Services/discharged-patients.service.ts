import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DischargedPatients } from '../Models/discharged-patients.model';

@Injectable({
  providedIn: 'root'
})
export class DischargedPatientsService {

  private baseURL = "http://localhost:8181/api/v1/dischargedpatients"
  constructor(private _http:HttpClient) { }

  public registerDishchargedPatientFromRemote():Observable<DischargedPatients[]> {
    return this._http.get<DischargedPatients[]>(`${this.baseURL}`)
  }
  getDischargedPatientsById(d_id:number):Observable<DischargedPatients>
    {
      return this._http.get<DischargedPatients>(`${this.baseURL}/${d_id}`)
    }
    public Count(){
      return this._http.get("http://localhost:8181/api/v1/dpCount")
    }
}
