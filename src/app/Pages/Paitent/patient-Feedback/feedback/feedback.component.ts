import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/Models/feedback.model';
import { FeedbackService } from 'src/app/Services/feedback.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback = new Feedback();
  msg = "";
  constructor(private fServe:FeedbackService, private _router: Router) { }

  ngOnInit(): void {
  }
  registerFeedback(){
    this.fServe.registerFeedbackFromRemote(this.feedback).subscribe(
      data => {
        console.log("Response received");
        alert("Feedback Submitted");
        this._router.navigate(['/feedback'])

      },
      error => {
        console.log("Exception occured");
        this.msg=error.error;
      }
    )
  }

}
