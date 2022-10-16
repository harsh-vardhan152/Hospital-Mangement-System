import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Models/admin-login.model';

@Injectable({
  providedIn: 'root'
})
export class AdminRegistrationService {

  constructor(private _http :HttpClient) { }
  public loginAdminFromRemote(admin :Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8181/adminlogin",admin)
 }

 public registerAdminFromRemote(admin :Admin):Observable<any>{
   return this._http.post<any>("http://localhost:8181/registerAdmin",admin)
 }
}
