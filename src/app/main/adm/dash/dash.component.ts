import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  list=[];
  hrs=["7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"];
  disp=["no disponible","no disponible","no disponible","no disponible","no disponible","no disponible"];
  constructor() { }

  ngOnInit() {
    this.list=[
      {
        name:"horario",
        url:"schedule"
      },
      {
        name:"usuarios",
        url:"users"
      },
      {
        name:"content",
        url:"content"
      }
    ];

    this.list.push({"hrs":this.hrs})
    console.log(this.hrs)
  }


}
