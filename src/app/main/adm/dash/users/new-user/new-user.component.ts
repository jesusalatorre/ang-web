import { UsersService } from './../../../../../service/users.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<NewUserComponent>,
    public usrService: UsersService,
  ) { }
  usuario;
  clave;
  nivel="";

  ngOnInit() {
  }
  
  crear(){
    // console.log(this.usuario);
    // console.log(this.clave);
    // console.log(this.nivel);
    this.usrService.createUsers(this.usuario,this.clave,this.nivel).subscribe((reply)=>{
      
    })
    this.dialogRef.close();

  }

  cerrar(){
    this.dialogRef.close();
  }

}
