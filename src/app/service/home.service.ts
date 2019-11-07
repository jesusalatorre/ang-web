import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public url = 'https://p99mty.appspot.com';
  public getNewsEndpoint = '/pages/getHome';
  public setNewsEndpoint = '/pages/setHome';

  constructor(
    private http: HttpClient

  ) { }
  getNews(id){
    //console.log("id:",id)
    return this.http.post(this.url+this.getNewsEndpoint,{"id":id})
    /*if (req.status == 200)
    {
      var x =JSON.parse(req.responseText)
      /*if(x.answer==1)
      {
        /*
        this.userType=x.session.type;
        this.Matrix=x.session.concesion;
        return "true";
      }
      else
      {
        return "false";
      }*/
  }
  setNews(id,img,story)
  {
    /*
     "id":           data.id,
     "img":          data.img,
     "story":        data.story,
     "publishedOn":  (new Date)  
    */
    return this.http.post(this.url+this.setNewsEndpoint,{"id":id,"img":img,"story":story});

  }
}
