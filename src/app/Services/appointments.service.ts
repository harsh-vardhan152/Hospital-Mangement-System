import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointments } from '../Models/appointments.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private baseURL = "http://localhost:8181/api/v1/appointments"
  private docApURL="http://localhost:8181/api/v1/docappointments"
  constructor(private _http:HttpClient) { }

  public registerAppointmentFromRemote():Observable<Appointments[]> {
    return this._http.get<Appointments[]>(`${this.baseURL}`)
  }
  getAppointmentById(ap_id:number):Observable<Appointments>
    {
      return this._http.get<Appointments>(`${this.baseURL}/${ap_id}`)
    }
    updateAppointment(ap_id:number,doctorlist:Appointments): Observable<Object>{
      return this._http.put(`${this.baseURL}/${ap_id}`,doctorlist)
    }
    deleteAppointment(ap_id:number): Observable<Object>
    {
      return this._http.delete(`${this.baseURL}/${ap_id}`);
    }
    addAppointment(appointment:Appointments):Observable<Appointments[]>{
      return this._http.post<any>("http://localhost:8181/api/v1/appointments", appointment)
    }
    public pendingCount(){
      return this._http.get("http://localhost:8181/api/v1/appointmentsCount")
    }
    
    docAppointments(d_name:string):Observable<Appointments[]>{
      return this._http.get<Appointments[]>(`${this.docApURL}/${d_name}`)
    }
}
