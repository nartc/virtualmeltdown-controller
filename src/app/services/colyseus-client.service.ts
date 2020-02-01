import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Colyseus from 'colyseus.js';
import { Observable, throwError } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from '../layouts/error-dialog.component';
import { GameState } from '../states/GameState';

@Injectable({
  providedIn: 'root'
})
export class ColyseusClientService {
  private _client: Colyseus.Client;
  private _room: Colyseus.Room<GameState>;

  constructor(private readonly ngbModal: NgbModal) {
    this._client = new Colyseus.Client('ws://localhost:3000');
  }

  setRoom(room: Colyseus.Room<GameState>) {
    this._room = room;
  }

  create() {
    this._client.create('game');
  }

  join(roomId: string, username: string): Observable<Colyseus.Room<GameState>> {
    return fromPromise(this._client.joinById<GameState>(roomId, { username }))
      .pipe(
        catchError(err => {
          const ref = this.ngbModal.open(ErrorDialogComponent, { backdrop: 'static', centered: true });
          ref.componentInstance.errorMessage = err.message ||
            'Error joining a room. Most likely, the server is not running.';
          return throwError(err);
        })
      );
  }

  move(vector: { x: number, y: number }) {
    this._room.send({ vector, eventType: 'move' });
  }
}
