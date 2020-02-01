import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControllerRoutingModule } from './controller-routing.module';
import { ControllerContainerComponent } from './controller-container.component';
import { JoystickDirective } from './directives/joystick.directive';
import { ItemButtonComponent } from './components/item-button.component';


@NgModule({
  declarations: [ControllerContainerComponent, JoystickDirective, ItemButtonComponent],
  imports: [
    CommonModule,
    ControllerRoutingModule
  ]
})
export class ControllerModule { }
