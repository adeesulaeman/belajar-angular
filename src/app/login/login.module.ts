import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LogoutComponent } from '../logout/logout.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HeaderModule
  ],
  exports: [LogoutComponent, LoginComponent]
})
export class LoginModule { }
