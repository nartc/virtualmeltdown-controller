import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-controller-container',
  template: `
    <p>
      controller-container works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControllerContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
