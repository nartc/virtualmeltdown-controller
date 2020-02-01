import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownControlModule } from '../components/dropdown-control/dropdown-control.module';
import { JoinContainerComponent } from './join-container.component';

import { JoinRoutingModule } from './join-routing.module';

@NgModule({
  declarations: [JoinContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JoinRoutingModule,
    DropdownControlModule,
  ]
})
export class JoinModule {
}
