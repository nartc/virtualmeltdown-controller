import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Colyseus from 'colyseus.js';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { catchError, map } from 'rxjs/operators';
import { ErrorDialogComponent } from '../layouts/error-dialog.component';
import { GameRoomAuthOptions } from '../states/GameRoomAuthOptions';
import { GameState } from '../states/GameState';
import { MoveMessage } from '../states/MoveMessage';
import { Player } from '../states/Player';

@Injectable({
  providedIn: 'root'
})
export class ColyseusClientService {
  private _client: Colyseus.Client;
  private _room: Colyseus.Room<GameState>;
  private _nameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _playerSubject: BehaviorSubject<Player> = new BehaviorSubject<Player>(null);

  constructor(private readonly ngbModal: NgbModal) {
    this._client = new Colyseus.Client('ws://localhost:3000');
    // this._client = new Colyseus.Client('ws:12c5439f.ngrok.io');
  }

  isConnected$(): Observable<boolean> {
    return of(this._room)
      .pipe(map(room => !!room));
  }

  setPlayer() {
    if (this._room) {
      this._playerSubject.next(this._room.state.players[this._room.sessionId + '_' + this._nameSubject.value]);
    }
  }

  setName(name: string) {
    this._nameSubject.next(name);
  }

  setRoom(room: Colyseus.Room<GameState>) {
    console.log('setRoom', { ...room });
    this._room = room;
    this.setPlayer();
  }

  create() {
    this._client.create('game');
  }

  join(roomId: string, username: string, type: string): Observable<Colyseus.Room<GameState>> {
    this.setName(username);
    const joinOptions = new GameRoomAuthOptions();
    joinOptions.username = username;
    joinOptions.type = type;
    return fromPromise(this._client.joinById<GameState>('aaaaa'.concat(roomId), joinOptions))
      .pipe(
        catchError(err => {
          if (err instanceof ProgressEvent) {
            const ref = this.ngbModal.open(ErrorDialogComponent, { backdrop: 'static', centered: true });
            ref.componentInstance.errorMessage = 'Error joining a room. Most likely, the server is not running.';
          }
          return throwError(err);
        })
      );
  }

  move(vector: { x: number, y: number }) {
    try {
      const message = new MoveMessage();
      console.log(vector.x, vector.y);
      message.vector.x = vector.x;
      message.vector.y = vector.y;
      message.username = this._nameSubject.value;
      message.eventType = 'move';
      this._room.send(message);
    } catch (e) {
      // TODO: handle error
      return;
    }
  }

  disconnect() {
    try {
      this._room.leave(true);
    } catch (e) {
      // TODO: handle error
      return;
    }
  }

  stun() {
    try {

    } catch (e) {
      // TODO: handle error
      return;
    }
  }
}
