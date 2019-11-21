import { AlertComponent } from './../../../alert/alert.component';
import { FaqService } from './../../../../../service/faq.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-c-contacto',
  templateUrl: './c-contacto.component.html',
  styleUrls: ['./c-contacto.component.css']
})
export class CContactoComponent implements OnInit {
  questions;
  constructor(
    public fService:FaqService,
    public dialog: MatDialog
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
      console.log("que regreasa",reply)
      
      this.fService.getFaq().subscribe((reply)=>{
        this.questions=reply;
        const dialogRef = this.dialog.open(AlertComponent, {
          //width: '750px',
          data:"Se a moficicado correctamente"
        });
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
