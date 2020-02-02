import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-info-button-svg',
  template: `
    <div class="info-button-container d-flex">
      <img [src]="imgSrc" alt="" class="info-button-icon">
      <div class="info-button-text">{{title}}</div>
    </div>
  `,
  styles: [`
    .info-button-container {
        margin-top: 20px;
        width: 200px;
        height: 70px;
        color: #40ebee;
        border: 1px solid #40ebee;
    }
    .info-button-icon {
      background: rgba(64,235,238,.2);
      border: 1px solid #40ebee;
      width: 50px;
      height: 50px;
      margin: 10px;
    }
    .info-button-text {
      margin-top: 10px;
      margin-right: 10px;
      padding: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoButtonSvgComponent implements OnInit {
  @Input() title: string;
  @Input() imgSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
