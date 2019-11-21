import { UsersService } from './../../../service/users.service';
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
    public usrSerice: UsersService
  ) { }
  username;
  password;
  ngOnInit() {
  }

  login()
  {
    this.usrSerice.login(this.username,this.password).subscribe((reply)=>{
      console.log("reply:",reply)
      if(reply=="admin")
      {
        this.router.navigate(['dash/content']);
      }
      else if(reply=="voluntarios")
      {
        this.router.navigate(['dash/content']);
      }
    })
   
  }
}
