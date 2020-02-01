import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControllerRoutingModule } from './controller-routing.module';
import { ControllerContainerComponent } from './controller-container.component';


@NgModule({
  declarations: [ControllerContainerComponent],
  imports: [
    CommonModule,
    ControllerRoutingModule
  ]
})
export class ControllerModule { }
