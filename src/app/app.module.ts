import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTableModule} from '@angular/material/table'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule,MatInputModule } from '@angular/material';

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
import { ContentComponent } from './main/adm/dash/content/content.component';
import { CHomwComponent } from './main/adm/dash/content/c-homw/c-homw.component';
import { CtalleresComponent } from './main/adm/dash/content/ctalleres/ctalleres.component';
import { CContactoComponent } from './main/adm/dash/content/c-contacto/c-contacto.component';
import { ContentTallerModComponent } from './main/adm/dash/content/ctalleres/content-taller-mod/content-taller-mod.component';
import { NewUserComponent } from './main/adm/dash/users/new-user/new-user.component';
import { AlertComponent } from './main/adm/alert/alert.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent, 
    children:[
    { path: 'schedule', component: ScheduleComponent },
    { path: 'users', component: UsersComponent },
    { path: 'content', component: ContentComponent },
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
    ContentComponent,
    CHomwComponent,
    CtalleresComponent,
    CContactoComponent,
    ContentTallerModComponent,
    NewUserComponent,
    AlertComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents:[ModComponent,ContentTallerModComponent,NewUserComponent,AlertComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { 
  constructor(){
  }
}
