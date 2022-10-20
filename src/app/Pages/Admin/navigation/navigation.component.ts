import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Admin } from 'src/app/Models/admin-login.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  admin=new Admin();
  param: Params | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      console.log(data);
      this.param=data;      
   })}

  ngOnInit(): void {
  }

}
