import { Component } from '@angular/core';
import * as Colyseus from 'colyseus.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gamejam2020-controller';

  ngOnInit() {
    // const client = new Colyseus.Client('ws://localhost:3000');
    // client.create('game').then(room => {
    //   console.log(room);
    //   room.onMessage(data => {
    //     console.log(data);
    //   });
    // });
  }
}
