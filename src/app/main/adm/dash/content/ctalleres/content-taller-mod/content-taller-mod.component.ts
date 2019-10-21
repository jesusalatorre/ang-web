import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  desc: string;
  horario: object;
  voluntarios:object;
}

@Component({
  selector: 'app-content-taller-mod',
  templateUrl: './content-taller-mod.component.html',
  styleUrls: ['./content-taller-mod.component.css']
})


export class ContentTallerModComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContentTallerModComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  days=["lunes","martes","miercoles","jueves","viernes","sabado"];
  hrs=["este dia no hay clase","7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","16:00","16:30"];

  ngOnInit() {
  }

}
