import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  users=[]
  displayedColumns = ["usuario", "tipo", "horas","asig","borr"];


  ngOnInit() {
    this.users=[
      {
        username:"bob",
        type:"admin",
        horas:"100",
      }
    ]
  }

}
