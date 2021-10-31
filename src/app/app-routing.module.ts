 import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheklinkGuard } from './cheklink.guard';
import { FileuploadComponent } from './component/fileupload/fileupload.component';
import { ChangepasswordComponent } from './component/meantodo/changepassword/changepassword.component';
import { ConfirmpassComponent } from './component/meantodo/confirmpass/confirmpass.component';
import { ForgotpassComponent } from './component/meantodo/forgotpass/forgotpass.component';
import { LoginComponent } from './component/meantodo/login/login.component';
import { PagenotfountComponent } from './component/meantodo/pagenotfount/pagenotfount.component';
import { RegistrationComponent } from './component/meantodo/registration/registration.component';
// import { LoginComponent } from './component/meantodo/login/login.component';
// import { RegistrationComponent } from './component/meantodo/registration/registration.component';
import { TodoComponent } from './component/meantodo/todo/todo.component';
import { VerfyComponent } from './component/meantodo/verfy/verfy.component';
import { TodoGuard } from './myguard/todo.guard';

const routes: Routes = [
  {
    path:"",component:FileuploadComponent 
  },
  {
    path:"register",component:RegistrationComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"forgot",component:ForgotpassComponent,
  },
  {
    path:"resetpassword",component:ConfirmpassComponent,
    canActivate:[CheklinkGuard]
  },
  {
    path:"changepassword",component:ChangepasswordComponent,
  },
  {
    path:"verifyemail/:id",component:VerfyComponent,
    
  },
  {
    path:"todo",component:TodoComponent,
    canActivate:[TodoGuard]
  },
  {
    path:"**",component:PagenotfountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
