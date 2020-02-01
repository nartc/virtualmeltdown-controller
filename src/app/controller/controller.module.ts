import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControllerRoutingModule } from './controller-routing.module';
import { ControllerContainerComponent } from './controller-container.component';
import { JoystickDirective } from './directives/joystick.directive';


@NgModule({
  declarations: [ControllerContainerComponent, JoystickDirective],
  imports: [
    CommonModule,
    ControllerRoutingModule
  ]
})
export class ControllerModule { }
