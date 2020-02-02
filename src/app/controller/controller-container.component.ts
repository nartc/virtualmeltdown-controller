import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ColyseusClientService } from '../services/colyseus-client.service';

@Component({
  selector: 'app-controller-container',
  template: `
    <div class="container-fluid row h-100 w-100 root-background">
      <player-info-container playerName="PlayerOne" [playerMessage]="playerMessage"></player-info-container>
      <div class="col-4 position-relative" appJoystick (move)="onMove($event)"></div>
      <div class="col-4 position-relative">
        <app-info-button-svg imgSrc="assets/jpg/bluePickup.jpg" title="Blue Battery"></app-info-button-svg>
        <app-info-button-svg imgSrc="assets/jpg/redPickup.jpg" title="Red Battery"></app-info-button-svg>
      </div>
      <div class="col-4 position-relative">
        <app-info-button-svg imgSrc="assets/jpg/greenPickup.jpg" title="Green Battery"></app-info-button-svg>
        <app-info-button-svg imgSrc="assets/jpg/yellowPickup.jpg" title="Yellow Battery"></app-info-button-svg>
      </div>
    </div>
  `,
  styles: [
    `.root-background {
      background-color: black;
      background-image: URL("assets/svg/backPattern.svg");
      background-position: center;
      background-size: cover;
      margin: 0;
      padding: 0;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControllerContainerComponent implements OnInit, OnDestroy {
  public playerMessage = 'Sweet apple pie oat cake fruitcake sesame snaps wafer. Pudding cotton candy powder cotton candy';

  constructor(private readonly colyseusClientService: ColyseusClientService) {
  }

  ngOnInit(): void {
    if (window) {
      window.onbeforeunload = this.ngOnDestroy.bind(this);
    }
  }

  onMove(vector: { x: number; y: number }) {
    this.colyseusClientService.move(vector);
  }

  onPress(label: string) {

  }

  ngOnDestroy(): void {
    this.colyseusClientService.disconnect();
  }
}
