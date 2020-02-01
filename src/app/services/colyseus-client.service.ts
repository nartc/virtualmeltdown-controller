import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Colyseus from 'colyseus.js';
import { throwError } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { catchError, tap } from 'rxjs/operators';
import { ErrorDialogComponent } from '../layouts/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ColyseusClientService {
  private _client: Colyseus.Client;
  private _room: Colyseus.Room<any>;

  constructor(private readonly ngbModal: NgbModal) {
    this._client = new Colyseus.Client('ws://localhost:3000');
  }

  join(roomId: string) {
    return fromPromise(this._client.joinById(roomId))
      .pipe(
        tap(room => this._room = room),
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
