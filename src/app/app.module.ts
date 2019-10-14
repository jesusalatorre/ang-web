import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTableModule} from '@angular/material/table'; 

import { AppComponent } from './app.component';
import { TalleresComponent } from './main/talleres/talleres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './main/home/home.component';
import { ModComponent } from './main/talleres/mod/mod.component';
import { ContactoComponent } from './main/contacto/contacto.component';
import { LoginComponent } from './main/adm/login/login.component';
import { MainComponent } from './main/main.component';
import { DashComponent } from './main/adm/dash/dash.component';
import { ScheduleComponent } from './main/adm/dash/schedule/schedule.component';
import { UsersComponent } from './main/adm/dash/users/users.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent, 
    children:[
    { path: 'schedule', component: ScheduleComponent },
    { path: 'users', component: UsersComponent },
    { path: '',redirectTo:'schedule', pathMatch:'full'}
]
},
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  //{ path: '',redirectTo: '/schedule', pathMatch: 'full',outlet:"dash"}

];

@NgModule({
  declarations: [
    AppComponent,
    TalleresComponent,
    HomeComponent,
    ModComponent,
    ContactoComponent,
    LoginComponent,
    MainComponent,
    DashComponent,
    ScheduleComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatTableModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents:[ModComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { 
  constructor(){
  }
}
