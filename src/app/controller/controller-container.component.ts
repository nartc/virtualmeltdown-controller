import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColyseusClientService } from '../services/colyseus-client.service';
import { Player } from '../states/Player';

@Component({
  selector: 'app-controller-container',
  template: `
    <div class="container-fluid row h-100 w-100 root-background" *ngIf="player$ | async as player">
      <player-info-container class="col-10"
                             [playerName]="player.name"
                             [playerMessage]="playerMessage"></player-info-container>
      <div class="col-2 position-relative">
        <h6 class="text-danger mb-0">Leave Button</h6>
      </div>
      <div class="col-4 position-relative" appJoystick (move)="onMove($event)"></div>
      <div class="col-4 position-relative">
        <app-info-button-svg imgSrc="assets/jpg/bluePickup.jpg"
                             title="Blue"
                             [item]="player.inventory.blue"
                             [itemLimit]="player.inventoryLimit.blue"></app-info-button-svg>
        <app-info-button-svg imgSrc="assets/jpg/redPickup.jpg" title="Red"
                             [item]="player.inventory.red"
                             [itemLimit]="player.inventoryLimit.red"></app-info-button-svg>
      </div>
      <div class="col-4 position-relative">
        <app-info-button-svg imgSrc="assets/jpg/greenPickup.jpg" title="Green"
                             [item]="player.inventory.green"
                             [itemLimit]="player.inventoryLimit.green"></app-info-button-svg>
        <app-info-button-svg imgSrc="assets/jpg/yellowPickup.jpg" title="Yellow"
                             [item]="player.inventory.yellow"
                             [itemLimit]="player.inventoryLimit.yellow"></app-info-button-svg>
      </div>
    </div>
  `,
  styles: [
      `.root-background {
      background-color: black;
      background-image: url("assets/svg/backPattern.svg");
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
  public player$: Observable<Player>;

  constructor(private readonly colyseusClientService: ColyseusClientService) {
  }

  ngOnInit(): void {
    this.player$ = this.colyseusClientService.player$();
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
