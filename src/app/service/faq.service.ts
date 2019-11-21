import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  public url = 'https://p99mty.appspot.com';
  public mkFaq ='/pages/makeFaq';
  public gtFaq ='/pages/getFaq';
  public dlFaq ='/pages/delFaq';
  public mdFaq ='/pages/modFaq';

  constructor(
    private http: HttpClient
  ) { }

  makeFaq(question,answer){
    /*
        "question":           data.question,
        "answer":             data.answer,
    */
    return this.http.post(this.url+this.mkFaq,{"question":question,"answer":answer})
  }

  getFaq(){
    return this.http.post(this.url+this.gtFaq,{})
  }


  delFaq(id){
    console.log("del")
    return this.http.post(this.url+this.dlFaq,{"id":id})
  }


  modFaq(question,answer,id){
    return this.http.post(this.url+this.mdFaq,{"id":id,"question":question,"answer":answer})
  }


}
