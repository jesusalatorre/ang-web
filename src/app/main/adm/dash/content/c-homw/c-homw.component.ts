import { HomeService } from './../../../../../service/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-homw',
  templateUrl: './c-homw.component.html',
  styleUrls: ['./c-homw.component.css']
})
export class CHomwComponent implements OnInit {

  constructor(
    public hService: HomeService
  ) { }
  //titulo1;
  //titulo2;
  desc1;
  desc2;
  img1;
  img2;


  ngOnInit() {
    //this.titulo1="hola";
    this.hService.getNews(1).subscribe((reply)=>{
      console.log(reply)
      //this.titulo1=reply[0].titulo;
      this.desc1=reply[0].story;
      this.img1=reply[0].img;
    })
    this.hService.getNews(2).subscribe((reply)=>{
      console.log(reply)
      this.desc2=reply[0].story;
      this.img2=reply[0].img;
    })
  }
  act(num){
    if(num==1)
    {
      this.hService.setNews(1,this.img1,this.desc1).subscribe((reply)=>{
        //console.log(reply.insertedCount);
        let reply1: any=reply;
        if(reply1.insertedCount==1)
        {

        }
      });

    }
    if(num==2)
    {
      this.hService.setNews(2,this.img2,this.desc2).subscribe((reply)=>{
        console.log(reply);
        let reply1: any=reply;
        if(reply1.insertedCount==1)
        {

        }
      });

    }
  }

}
