import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ColyseusClientService } from '../services/colyseus-client.service';

@Component({
  selector: 'app-join-container',
  template: `
    <form class="container d-flex flex-column align-items-center justify-content-center w-100 h-100 join-container"
          [formGroup]="form"
          (ngSubmit)="onJoin()">
      <div class="row w-100">
        <div class="col-6 offset-3">
          <div class="form-group text-center">
            <label for="username" class="h4">USERNAME</label>
            <input type="text"
                   class="form-control form-control-lg"
                   id="username"
                   placeholder="Your Username"
                   formControlName="username">
          </div>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-6 offset-3">
          <div class="form-group text-center">
            <label for="roomId" class="h4">ROOM ID</label>
            <input type="text"
                   class="form-control form-control-lg"
                   id="roomId"
                   placeholder="Enter the room Id"
                   formControlName="roomId">
          </div>
        </div>
      </div>
      <div class="w-100 text-center">
        <button class="btn join-button btn-lg" type="submit" [disabled]="form.invalid">JOIN</button>
      </div>
    </form>
  `,
  styles: [`
    .join-container {
      background-color: black;
      background-image: URL('assets/svg/backgroundPattern.svg');
      width: 100%;
      color: #40ebee;
    }
    .join-button {
      background-color: #40ebee;
      color: black;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JoinContainerComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly colyseusClientService: ColyseusClientService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      roomId: ['', Validators.required]
    });
  }

  onJoin() {
    const {roomId, username} = this.form.value;
    this.colyseusClientService.join(roomId, username)
      .pipe(take(1))
      .subscribe(room => {
        this.colyseusClientService.setRoom(room);
        this.router.navigate(['/controller']);
      });
  }
}
