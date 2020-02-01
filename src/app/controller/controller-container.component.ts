import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColyseusClientService } from '../services/colyseus-client.service';

@Component({
  selector: 'app-controller-container',
  template: `
    <div class="container-fluid row h-100 w-100">
      <div class="col-6 position-relative" appJoystick (move)="onMove($event)"></div>
      <div class="col-6 position-relative">
        <app-item-button [iconClass]="'la-bolt'" [label]="'Stun'" (press)="onPress($event)"></app-item-button>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControllerContainerComponent implements OnInit {

  constructor(private readonly colyseusClientService: ColyseusClientService) {
  }

  ngOnInit(): void {
  }

  onMove(vector: { x: number; y: number }) {
    this.colyseusClientService.move(vector);
  }

  onPress(label: string) {

  }
}
