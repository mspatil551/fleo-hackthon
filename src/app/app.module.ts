import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsernameComponent } from './component/username/username.component';
import { RegistrationComponent } from './component/meantodo/registration/registration.component';
import { LoginComponent } from './component/meantodo/login/login.component';
import { TodoComponent } from './component/meantodo/todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotpassComponent } from './component/meantodo/forgotpass/forgotpass.component';
import { ConfirmpassComponent } from './component/meantodo/confirmpass/confirmpass.component';
import { ChangepasswordComponent } from './component/meantodo/changepassword/changepassword.component';
import { PagenotfountComponent } from './component/meantodo/pagenotfount/pagenotfount.component';
import { VerfyComponent } from './component/meantodo/verfy/verfy.component';
import { ReactiveformComponent } from './component/reactiveform/reactiveform.component';
import { FileuploadComponent } from './component/fileupload/fileupload.component';
import { FleohackerthonComponent } from './fleohackerthon/fleohackerthon.component';
// import { ForgotpassComponent } from './meantodo/forgotpass/forgotpass.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsernameComponent,
    RegistrationComponent,
    LoginComponent,
    TodoComponent,
    ForgotpassComponent,
    ConfirmpassComponent,
    ChangepasswordComponent,
    PagenotfountComponent,
    VerfyComponent,
    ReactiveformComponent,
    FileuploadComponent,
    FleohackerthonComponent,
    // ForgotpassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
