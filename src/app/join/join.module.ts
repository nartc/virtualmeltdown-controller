import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { JoinRoutingModule } from './join-routing.module';
import { JoinContainerComponent } from './join-container.component';


@NgModule({
  declarations: [JoinContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JoinRoutingModule
  ]
})
export class JoinModule { }
