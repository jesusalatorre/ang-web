import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login()
  {
    //var login=this.userService.login(form.value.email,form.value.password);
    var login="true";
    if(login=="true")
    {
      this.router.navigate(['dash/content']);
    }
    else if(login=="false")
    {
      //this.presentToastWithOptions("ahorita","Login incorrecto");
    }
    else
    {
      //this.presentToastWithOptions("ahorita","Problemas de servidor");
    }
  }
}
