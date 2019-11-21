import { horas, voluntraios } from './../../adm/dash/content/ctalleres/content-taller-mod/content-taller-mod.component';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  title: string;
  desc: string;
  horario: horas;
  voluntarios:voluntraios;
}

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

}
