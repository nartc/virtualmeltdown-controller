import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import { ServiceBot } from '../../../../common/models/game-asset.types';
import { GameAssetDataService } from '../../../../common/services/game-asset-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'player-info-display',
  template: `
    <div class="d-flex flex-direction-row player-container">
      <img [src]="playerServiceBot.animatedImageUrl" alt="" class="spider-anim">
      <div class="player-text-container">
        <h3 class="player-text">{{playerName}}</h3>
        <p class="player-text">{{playerServiceBot.name}} {{playerServiceBot.bio}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./player-info-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerInfoDisplayComponent implements OnInit {
  @Input() playerName: string;
  @Input() playerType: string;

  public serviceBots: ServiceBot[];
  public playerServiceBot: ServiceBot;

  constructor(private readonly gameAssetDataService: GameAssetDataService) { }

  ngOnInit(): void {
    this.serviceBots = this.gameAssetDataService.getServiceBots();
    this.playerServiceBot = this.gameAssetDataService.getServiceBotByPlayer(this.playerType);
  }

}
