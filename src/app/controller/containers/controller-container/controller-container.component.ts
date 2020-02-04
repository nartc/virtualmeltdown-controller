import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ColyseusClientService } from '../../../common/services/colyseus-client.service';
import { Player } from '../../../states/Player';
import { GameAssetDataService } from '../../../common/services/game-asset-data.service';
import { PickUp } from '../../../common/models/game-asset.types';
import { Vector2 } from '../../../common/models/geometry.types';


@Component({
  selector: 'app-controller-container',
  templateUrl: 'controller-container.component.html',
  styleUrls: ['./controller-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllerContainerComponent implements OnInit, OnDestroy {
  player$: Observable<Player>;
  public pickups: PickUp[];

  constructor(
    private readonly colyseusClientService: ColyseusClientService,
    private readonly router: Router,
    private readonly gameAssetDataService: GameAssetDataService,
  ) {
  }

  ngOnInit(): void {
    this.player$ = this.colyseusClientService.player$();
    this.pickups = this.gameAssetDataService.getPickups();
    if (window) {
      window.onbeforeunload = this.ngOnDestroy.bind(this);
    }

    this.colyseusClientService.connectionClose$().pipe(take(1)).subscribe(() => {
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['/join']);
    });
  }

  onMove(vector: Vector2) {
    this.colyseusClientService.move(vector);
  }

  onClickExit() {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/join']);
  }

  ngOnDestroy(): void {
    this.colyseusClientService.disconnect();
  }

  onDeposit(color: string) {
    this.colyseusClientService.deposit(color);
  }
}
