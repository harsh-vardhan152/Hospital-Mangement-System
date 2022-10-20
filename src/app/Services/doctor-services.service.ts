import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { DoctorList } from '../Models/doctor-list.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorServicesService {

  private baseURL = "http://localhost:8181/api/v1/doctors"
  private docNameURL="http://localhost:8181/api/v1/docByName"
  constructor(private _http:HttpClient) { }

  public registerDoctorFromRemote():Observable<DoctorList[]> {
      return this._http.get<DoctorList[]>(`${this.baseURL}`)
    }
    getDoctorById(d_id:number):Observable<DoctorList>
    {
      return this._http.get<DoctorList>(`${this.baseURL}/${d_id}`)
    }
    updateDoctor(d_id:number,doctorlist:DoctorList): Observable<Object>{
      return this._http.put(`${this.baseURL}/${d_id}`,doctorlist)
    }
    deleteDoctor(d_id:number): Observable<Object>
    {
      return this._http.delete(`${this.baseURL}/${d_id}`);
    }
    getAllDoctors():Observable<DoctorList>
    {
      return this._http.get<DoctorList>(`${this.baseURL}`)
    }
    public addDoctor(doctor: DoctorList):Observable<any> {
      return this._http.post<any>("http://localhost:8181/api/v1/doctors", doctor)
    }
    public unVDoctorsCount(){
      return this._http.get("http://localhost:8181/api/v1/doctorscount")
    }

    public getDocByName(d_name:string):Observable<DoctorList>{
      return this._http.get<DoctorList>(`${this.docNameURL}/${d_name}`)
    }

    
  }
