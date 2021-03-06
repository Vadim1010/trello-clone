﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
  ],
  declarations: [
    AuthenticationComponent
  ],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {
}
