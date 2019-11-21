import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TalleresService {
  public url = 'https://p99mty.appspot.com';
  public stTalleres ='/pages/makeTaller';
  public gtTalleres ='/pages/getTaller';
  public mdTalleres ='/pages/modTaller';
  public dlTalleres ='/pages/delTaller';

  constructor(
    private http: HttpClient
  ) { }

  setTalleres(title,img,des,hor,vol,type){
    /*
       "title":           data.title,
        "image":           data.img,
        "desc":            data.desc,
        "horario":         data.hor,
        "voluntario":      data.vol,
        "type":            data.type,
    */
   console.log("se esta mandadndo",{"title":title,"img":img,"desc":des,"hor":hor,"vol":vol,"type":type})
    return this.http.post(this.url+this.stTalleres,{"title":title,"img":img,"desc":des,"hor":hor,"vol":vol,"type":type})
  }
  
  getTalleres(type){
    return this.http.post(this.url+this.gtTalleres,{"type":type})
  }

  modTalleres(title,image,des,hor,vol,type){
    return this.http.post(this.url+this.mdTalleres,{"title":title,"img":image,"desc":des,"hor":hor,"vol":vol,"type":type})
  }
  
  delTalleres(title){
    console.log(title)
    return this.http.post(this.url+this.dlTalleres,{"title":title})
  }
}
