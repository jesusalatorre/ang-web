import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  questions;
  constructor() { }

  ngOnInit() {
    this.questions=[
      {
        question:"como es que esto funciona?",
        answer:"nose"
      },
      {
        question:"otra pregunta",
        answer:"otro nose"
        
      },
      {
        question:"otra pregunta x 2",
        answer:"otro nose por dos"
      },
    ]
  }

}
