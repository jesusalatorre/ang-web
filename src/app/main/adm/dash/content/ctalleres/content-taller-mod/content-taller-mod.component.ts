import { TalleresService } from './../../../../../../service/talleres.service';
import { Component, OnInit, Inject, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface horas{
  lunes:string,
  martes:string;
  miercoles:string;
  jueves:string;
  viernes:string;
  sabado:string;
}

export interface voluntraios{
  uno:string;
  dos:string;
  tres:string;
}

export interface DialogData {
  title: string;
  desc: string;
  horario: horas;
  voluntarios:voluntraios;
  new:boolean;
  img:string;
  type:string;
}

interface days{}

@Component({
  selector: 'app-content-taller-mod',
  templateUrl: './content-taller-mod.component.html',
  styleUrls: ['./content-taller-mod.component.css']
})


export class ContentTallerModComponent implements OnInit, AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<ContentTallerModComponent>,
    public tService: TalleresService,
    public _elementRef: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  title;
  xlunes;
  xmartes;
  xmiercoles;
  xjueves;
  xviernes;
  xsabado;
  days=["lunes","martes","miercoles","jueves","viernes","sabado"];
  hrs=["este dia no hay clase","7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","16:00","16:30"];
  
  ngOnInit() {
    console.log("llega",this.data)

    if(this.data==null)
    {
      this.data.voluntarios.uno="";
    }
    if(this.data.voluntarios==null)
    {
      console.log("si es null");
      this.data.voluntarios.uno="";
    }
  }
  ngAfterViewInit(){
    this.title=this._elementRef.nativeElement.querySelector("#title");
    this.xlunes=this._elementRef.nativeElement.querySelector("#lunes");
    this.xmartes=this._elementRef.nativeElement.querySelector("#martes");
    this.xmiercoles=this._elementRef.nativeElement.querySelector("#miercoles");
    this.xjueves=this._elementRef.nativeElement.querySelector("#jueves");
    this.xviernes=this._elementRef.nativeElement.querySelector("#viernes");
    this.xsabado=this._elementRef.nativeElement.querySelector("#sabado");

    this._elementRef.nativeElement.querySelector("#lunes").value=this.data.horario.lunes;
    this._elementRef.nativeElement.querySelector("#martes").value=this.data.horario.martes;
    this._elementRef.nativeElement.querySelector("#miercoles").value=this.data.horario.miercoles;
    this._elementRef.nativeElement.querySelector("#jueves").value=this.data.horario.jueves;
    this._elementRef.nativeElement.querySelector("#viernes").value=this.data.horario.viernes;
    this._elementRef.nativeElement.querySelector("#sabado").value=this.data.horario.sabado;
    
  }

  delete(){
    this.tService.delTalleres(this.data.title).subscribe((reply)=>{
      console.log("del",reply);
    });
    this.dialogRef.close();
  }

  create(){
    /*console.log("lunes",this.lunes);
    console.log("martes",this.martes.value);*/
    this.data.horario.lunes=this.xlunes.value;
    this.data.horario.martes=this.xmartes.value;
    this.data.horario.miercoles=this.xmiercoles.value;
    this.data.horario.jueves=this.xjueves.value;
    this.data.horario.viernes=this.xviernes.value;
    this.data.horario.sabado=this.xsabado.value;
    console.log(this.xmiercoles)


    if(this.data.new==true){

      this.tService.setTalleres(this.title.value,this.data.img,this.data.desc,this.data.horario,this.data.voluntarios,this.data.type).subscribe((reply)=>
      {
         this.dialogRef.close();
      })
    }
    else{

      this.tService.modTalleres(this.title.value,this.data.img,this.data.desc,this.data.horario,this.data.voluntarios,this.data.type).subscribe((reply)=>
      {
         this.dialogRef.close();
      })
    }

  }

  save(){

  }

  log(){
    console.log(this.xmiercoles)
    
  }
}
