import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="d-flex flex-column">
      <app-neon-text [text]="'Virtual Meltdown'"></app-neon-text>
      <div class="d-flex buttons mt-3">
        <button class="btn btn-primary btn-lg" type="button">JOIN</button>
        <button class="btn btn-primary btn-lg" type="button">HELP</button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      height: 100%;
      background-image: url('assets/svg/backPattern.svg');
      width: 100%;
      color: #40ebee;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .buttons {
      justify-content: space-evenly;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
