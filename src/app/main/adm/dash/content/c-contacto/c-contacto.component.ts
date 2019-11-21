import { FaqService } from './../../../../../service/faq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-contacto',
  templateUrl: './c-contacto.component.html',
  styleUrls: ['./c-contacto.component.css']
})
export class CContactoComponent implements OnInit {
  questions;
  constructor(
    public fService:FaqService
  ) { }

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
    this.fService.getFaq().subscribe((reply)=>{
      this.questions=reply;
    })
  }
  delete(id){
    this.fService.delFaq(id).subscribe((reply)=>{
      this.fService.getFaq().subscribe((reply)=>{
        this.questions=reply;
      })
    })
  }

  mod(question,answer,id){
    this.fService.modFaq(question,answer,id).subscribe((reply)=>{
      this.fService.getFaq().subscribe((reply)=>{
        this.questions=reply;
      })
    })
  }

  create(){
    this.fService.makeFaq("","").subscribe((reply)=>{
      this.fService.getFaq().subscribe((reply)=>{
        this.questions=reply;
      })
    })
  }
}
