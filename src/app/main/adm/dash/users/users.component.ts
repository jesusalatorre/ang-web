import { NewUserComponent } from './new-user/new-user.component';
import { UsersService } from './../../../../service/users.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    public usrService:UsersService,
    public dialog:MatDialog
  ) { }
  users;
  displayedColumns = ["usuario", "tipo", "horas","asig","asigB","borr"];
  horas={}

  ngOnInit() {
    this.users=[
      {
        username:"bob",
        type:"admin",
        horas:"100",
      }
    ];
    this.usrService.listUsers().subscribe((reply)=>{
      console.log("deportivos:",reply);
      this.users=reply;
    })
  }
  onRowClicked(row){}
  newUsr(){
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '750px'
    });
  }
  delete(data){
        //console.log("paso 1")
    this.usrService.deleteUsers(data).subscribe(()=>{
        //console.log("paso 2")
    this.usrService.listUsers().subscribe((reply)=>{
        //console.log("paso 3")
        this.users=reply;
      })
    })
  }

  asignar(user,hora){
    //console.log(data);
    this.usrService.addHrs(user,hora).subscribe((reply)=>{
      this.usrService.listUsers().subscribe((reply)=>{
        console.log("deportivos:",reply);
        this.users=reply;
      })
    })
  }
}
