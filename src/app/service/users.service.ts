import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url = 'https://p99mty.appspot.com';
  public listUsrs ='/users/list';
  public createUsrs ='/users/register';
  public deleteUsrs ='/users/delete';
  public horasUsrs ='/users/horas';
  public loginUsrs ='/login/logme';


  constructor(
    private http: HttpClient

  ) { }


  login(username,password){
    //console.log("url ",)
    return this.http.post(this.url+this.loginUsrs,{"username":username,"password":password},{responseType: 'text'});
  }

  listUsers(){
    //console.log("url ",)
    return this.http.post(this.url+this.listUsrs,{});
  }

  createUsers(username,password,type){
    return this.http.post(this.url+this.createUsrs,{"username":username,"password":password,"type":type});
  }

  deleteUsers(data){
    return this.http.post(this.url+this.deleteUsrs,{"username":data.username});
  }

  addHrs(user,horas){
    return this.http.post(this.url+this.horasUsrs,{"username":user,"horas":horas});
  }
}
