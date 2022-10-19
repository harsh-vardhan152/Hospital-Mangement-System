import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientList } from '../Models/patient-list.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private baseURL = "http://localhost:8181/api/v1/patients"
  private URL = "http://localhost:8181/api/v1/patient"
  constructor(private _http:HttpClient) { }

  public registerPatientsFromRemote():Observable<PatientList[]> {
      return this._http.get<PatientList[]>(`${this.baseURL}`)
    }
    public getPatientsById(p_id:number):Observable<PatientList>
    {
      return this._http.get<PatientList>(`${this.baseURL}/${p_id}`)
    }
    public updatePatients(p_id:number,patientslist:PatientList): Observable<Object>{
      return this._http.put(`${this.baseURL}/${p_id}`,patientslist)
    }
    public deletePatients(p_id:number): Observable<Object>
    {
      return this._http.delete(`${this.baseURL}/${p_id}`);
    }
    public getPatientsByUsername(username:string):Observable<PatientList>
    {
      return this._http.get<PatientList>(`${this.URL}/${username}`)
    }
}
