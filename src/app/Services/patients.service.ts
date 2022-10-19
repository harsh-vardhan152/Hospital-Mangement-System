import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientList } from '../Models/patient-list.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private baseURL = "http://localhost:8181/api/v1/patients"
  constructor(private _http:HttpClient) { }

  public registerPatientsFromRemote():Observable<PatientList[]> {
      return this._http.get<PatientList[]>(`${this.baseURL}`)
    }
    getPatientsById(p_id:number):Observable<PatientList>
    {
      return this._http.get<PatientList>(`${this.baseURL}/${p_id}`)
    }
    updatePatients(p_id:number,patientslist:PatientList): Observable<Object>{
      return this._http.put(`${this.baseURL}/${p_id}`,patientslist)
    }
    deletePatients(p_id:number): Observable<Object>
    {
      return this._http.delete(`${this.baseURL}/${p_id}`);
    }
}
