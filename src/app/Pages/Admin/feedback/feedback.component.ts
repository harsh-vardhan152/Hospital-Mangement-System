import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/Models/feedback.model';
import { FeedbackService } from 'src/app/Services/feedback.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponentAdmin implements OnInit {

  feedback!: Feedback[];
  msg: any;
  constructor(private fServe:FeedbackService, private _router: Router) { }

  ngOnInit(): void {
    this.getFeedback();
  }
  getFeedback(){
    this.fServe.registerDisplayFeedbackFromRemote().subscribe(
      data => {
        this.feedback=data;
      },
      error => {
        console.log("Exception occured");
        this.msg=error.error;
      }
    )
  }
  deleteFeedback(f_id:Number){
    this.fServe.deleteFeedback(f_id).subscribe(
      data=>{

      }
    )
    this.getFeedback();
  }

}
