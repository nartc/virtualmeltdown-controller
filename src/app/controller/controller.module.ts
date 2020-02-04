import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerRoutingModule } from './controller-routing.module';
import { ControllerContainerComponent } from './containers/controller-container/controller-container.component';
import { JoystickDirective } from './directives/joystick.directive';
import { ItemButtonComponent } from './components/item-button.component';
import { GameAssetDataService } from '../common/services/game-asset-data.service';
import { PlayerInfoDisplayComponent } from './components/player-info/player-info-display/player-info-display.component';
import { PlayerInventoryButtonComponent } from './components/player-info/player-info-button/player-inventory-button.component';


@NgModule({
  declarations: [
    ControllerContainerComponent,
    JoystickDirective,
    ItemButtonComponent,
    PlayerInventoryButtonComponent,
    PlayerInfoDisplayComponent
  ],
  imports: [
    CommonModule,
    ControllerRoutingModule,
  ],
  providers: [GameAssetDataService]
})
export class ControllerModule {
}
