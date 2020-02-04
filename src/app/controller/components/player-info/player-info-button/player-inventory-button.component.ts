import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// playerInventoryButton
@Component({
  selector: 'app-player-inventory-button',
  template: `
<!--    TODO: Make sure glow behavior did not change when able to test-->
    <button type="button"
            class="inventory-button-container d-flex"
            (click)="deposit.emit()"
            [disabled]="!inRange || !item"
            [ngClass]="{'btn-glow': inRange && item}">
      <img [src]="imgSrc" alt="" class="inventory-button-icon">
      <div class="d-flex flex-column inventory-button-text">
        <span>{{title}}</span>
        <small>{{item}} / {{itemLimit}}</small>
      </div>
    </button>
  `,
  styleUrls: ['./player-inventory-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerInventoryButtonComponent implements OnInit {
  @Input() title: string;
  @Input() imgSrc: string;
  @Input() item = 0;
  @Input() itemLimit = 0;
  @Input() inRange = '';
  @Input() color: string;
  @Output() deposit: EventEmitter<null> = new EventEmitter<null>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
