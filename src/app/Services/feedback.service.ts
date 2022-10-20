import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../Models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  
  private baseURL = "http://localhost:8181/api/v1/feedbacks"
  constructor(private _http:HttpClient) { }

  public registerDisplayFeedbackFromRemote():Observable<Feedback[]> {
      return this._http.get<Feedback[]>(`${this.baseURL}`)
    }
    getDisplayfeedbackById(p_id:number):Observable<Feedback>
    {
      return this._http.get<Feedback>(`${this.baseURL}/${p_id}`)
    }
    // updateDoctor(d_id:number,displayfeedback:Displayfeedback): Observable<Object>{
    //   return this._http.put(`${this.baseURL}/${d_id}`,doctorlist)
    // }
    // deleteDoctor(d_id:number): Observable<Object>
    // {
    //   return this._http.delete(`${this.baseURL}/${d_id}`);
    // }
    public registerFeedbackFromRemote(feedback: Feedback):Observable<any> {
      return this._http.post<any>("http://localhost:8181/api/v1/feedbacks", feedback)
    }
    public deleteFeedback(f_id:Number){
      return this._http.delete(`${this.baseURL}/${f_id}`)
    }
  
}
