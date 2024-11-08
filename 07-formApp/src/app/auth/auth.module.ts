import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RegisterPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
