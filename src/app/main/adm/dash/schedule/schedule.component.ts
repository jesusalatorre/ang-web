import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit,AfterViewInit {
  hrs=["7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","16:00","16:30"];
  disp=["nodisponible","nodisponible","nodisponible","nodisponible","nodisponible","nodisponible"];
  days=["lunes","martes","miercoles","jueves","viernes","sabado"];
  constructor(
    private renderer: Renderer2,
    ) { }
    //@ViewChild('xxx') tab
  ngOnInit() {
  }
  ngAfterViewInit(){
    //console.log("hola",this.tab);
  }
  onSave(event){    
    console.log("Save button is clicked!", event);    
    const hasClass = event.target.classList;
    console.log(hasClass);
    if(hasClass[0]=="ocupado"||hasClass[1]=="ocupado") {
      this.renderer.removeClass(event.target,"ocupado" );
      this.renderer.addClass(event.target,"desocupado" );
    } else {
      this.renderer.removeClass(event.target,"desocupado" );
      this.renderer.addClass(event.target,"ocupado" );
    }
  }   

  send(){

  }
}
