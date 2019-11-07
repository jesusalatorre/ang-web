import { TalleresService } from './../../../../../../service/talleres.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {NgForm} from '@angular/forms';

export interface DialogData {
  title: string;
  desc: string;
  horario: object;
  voluntarios:object;
}

interface days{}

@Component({
  selector: 'app-content-taller-mod',
  templateUrl: './content-taller-mod.component.html',
  styleUrls: ['./content-taller-mod.component.css']
})


export class ContentTallerModComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContentTallerModComponent>,
    public tService: TalleresService,
    public form:NgForm,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  days=["lunes","martes","miercoles","jueves","viernes","sabado"];
  hrs=["este dia no hay clase","7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","16:00","16:30"];
  
  ngOnInit() {
    console.log("no debe ser null",this.data.voluntarios)

    if(this.data==null)
    {
      this.data.voluntarios=[""];
    }
    if(this.data.voluntarios==null)
    {
      console.log("si es null");
      this.data.voluntarios=[""];
    }
  }

  delete(){
    this.tService.delTalleres(this.data.title);
    this.dialogRef.close();
  }

  create(){

  }

  save(){

  }

  log(x){
    console.log(x)
  }
}
