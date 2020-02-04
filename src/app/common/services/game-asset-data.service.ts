import { Injectable } from '@angular/core';
import { PickUp, ServiceBot } from '../models/game-asset.types';


@Injectable({
  providedIn: 'root',
})
export class GameAssetDataService {

  constructor() {
  }

  private pickups: PickUp[] = [
    {color: {label: 'Red', value: 'red'}, imageUrl: 'assets/jpg/redPickup.jpg'},
    {color: {label: 'Green', value: 'green'}, imageUrl: 'assets/jpg/greenPickup.jpg'},
    {color: {label: 'Blue', value: 'blue'}, imageUrl: 'assets/jpg/bluePickup.jpg'},
    {color: {label: 'Yellow', value: 'yellow'}, imageUrl: 'assets/jpg/yellowPickup.jpg'},
  ];

  private serviceBots: ServiceBot[] = [
    {
      name: 'Cube Bot',
      displayName: 'CUBE_BOT',
      bio: 'All around balanced drone. Average inventory capacity and average speed. The best of both worlds.',
      animatedImageUrl: 'assets/gif/cubot.gif',
      playerType: 'a',
    },
    {
      name: 'Spider Bot',
      displayName: 'SPIDER_BOT',
      bio: 'High inventory at the expense of lower speed.',
      animatedImageUrl: 'High speed at the expense of lower inventory capacity',
      playerType: 'b',
    },
    {
      name: 'Sphere Bot',
      displayName: 'SPHERE_BOT',
      bio: 'High speed at the expense of lower inventory capacity',
      animatedImageUrl: 'assets/gif/spherebot.gif',
      playerType: 'c',
    },
  ];

  public getPickups(): PickUp[] {
    return this.pickups;
  }

  public getServiceBots(): ServiceBot[] {
    return this.serviceBots;
  }

  public getServiceBotByPlayer(playerType: string) {
    const serviceBot = this.serviceBots.find(sb => sb.playerType = playerType);
    return serviceBot ? serviceBot : null;
  }
}
