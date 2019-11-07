import { FaqService } from './../../service/faq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  questions;
  constructor(
    public fService: FaqService
  ) { }

  ngOnInit() {
    this.questions=[
      {
        question:"como es que esto funciona?",
        answer:"nose"
      },
      {
        question:"otra pr egunta",
        answer:"otro nose"
        
      },
      {
        question:"otra pregunta x 2",
        answer:"otro nose por dos"
      },
    ]

    this.fService.getFaq().subscribe((reply)=>{
      this.questions=reply;
    })
  }

}
