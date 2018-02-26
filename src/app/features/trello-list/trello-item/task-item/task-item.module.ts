﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TaskItemComponent
  ],
  exports: [TaskItemComponent],
})
export class TaskItemModule {
}
