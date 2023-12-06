import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { playComponent } from './play.component';



@NgModule({
  declarations: [
    playComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    playComponent
  ]
})
export class PlayModule { }
