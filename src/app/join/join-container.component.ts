import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorDialogComponent } from '../layouts/error-dialog.component';
import { ColyseusClientService } from '../services/colyseus-client.service';

@Component({
  selector: 'app-join-container',
  template: `
    <form class="container d-flex flex-column align-items-center justify-content-center w-100 h-100 join-container"
          [formGroup]="form"
          (ngSubmit)="onJoin()"
          novalidate>
      <div class="row w-100">
        <div class="col-6 offset-3">
          <div class="form-group text-center">
            <label for="username" class="h5">USERNAME</label>
            <input type="text"
                   class="form-control form-control-lg"
                   [ngClass]="{'is-invalid': form.get('username').touched && form.get('username').errors}"
                   id="username"
                   placeholder="Your Username"
                   formControlName="username">
            <div class="invalid-feedback" *ngIf="form.get('username').touched && form.get('username').errors">
              <small *ngIf="form.get('username').hasError('required')">Username is required</small>
              <small *ngIf="form.get('username').hasError('minlength')">Username must be at least 4 characters</small>
            </div>
          </div>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-6 offset-3">
          <div class="form-group text-center">
            <label for="roomId" class="h5">ROOM ID</label>
            <input type="text"
                   class="form-control form-control-lg"
                   [ngClass]="{'is-invalid': form.get('roomId').touched && form.get('roomId').errors}"
                   id="roomId"
                   placeholder="Enter the room Id"
                   formControlName="roomId">
            <div class="invalid-feedback" *ngIf="form.get('roomId').touched && form.get('roomId').errors">
              <small>RoomId is required</small>
            </div>
          </div>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-6 offset-3">
          <div class="form-group text-center">
            <label for="type" class="h5">TYPE</label>
            <app-dropdown-control formControlName="type"
                                  [ngClass]="{'is-invalid': form.get('type').touched && form.get('type').errors}"
                                  [items]="robotTypes"
                                  [label]="'Select type'"></app-dropdown-control>
            <div class="invalid-feedback" *ngIf="form.get('type').touched && form.get('type').errors">
              <small>Type is required</small>
            </div>
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
      background-image: URL('assets/svg/backPattern.svg');
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
  robotTypes: { label: string, value: string }[] = [
    { label: 'Cube Bot', value: 'a' },
    { label: 'Spidey Bot', value: 'b' },
    { label: 'Sphere Bot', value: 'c' },
    // {label: 'Robot D', value: 'd'},
  ];

  constructor(
    private readonly colyseusClientService: ColyseusClientService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly ngbModal: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      roomId: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onJoin() {
    const { roomId, username, type } = this.form.value;
    this.colyseusClientService.join(roomId, username, type)
      .subscribe(room => {
        this.colyseusClientService.setRoom(room);
        this.router.navigate(['/controller']);
      }, err => {
        if (!(err instanceof ProgressEvent)) {
          const ref = this.ngbModal.open(ErrorDialogComponent, { centered: true, backdrop: true });
          ref.componentInstance.errorMessage = err.message || 'Meh.';
        }
      });
  }
}
