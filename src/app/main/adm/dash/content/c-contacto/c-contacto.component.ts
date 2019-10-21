import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-contacto',
  templateUrl: './c-contacto.component.html',
  styleUrls: ['./c-contacto.component.css']
})
export class CContactoComponent implements OnInit {
  questions=[];
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
