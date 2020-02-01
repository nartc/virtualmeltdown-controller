import { AfterViewInit, Directive, ElementRef, EventEmitter, NgZone, OnDestroy, Output } from '@angular/core';
import * as nipplejs from 'nipplejs';

@Directive({
  selector: '[appJoystick]'
})
export class JoystickDirective implements AfterViewInit, OnDestroy {
  private _manager: nipplejs.JoystickManager;
  @Output() move: EventEmitter<{ x: number, y: number }> = new EventEmitter<{ x: number, y: number }>();

  constructor(private readonly el: ElementRef<HTMLElement>, private readonly ngZone: NgZone) {

  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this._manager = nipplejs.create({
        zone: this.el.nativeElement,
        mode: 'dynamic',
        fadeTime: 200,
        maxNumberOfNipples: 1,
        color: 'darkgrey',
        multitouch: false,
        size: 150
      });
      this.ngZone.run(this._registerJoystickListener.bind(this));
    });
  }

  private _registerJoystickListener() {
    this._manager.on('added', (evt, joystick: any) => {
      const stick = joystick as nipplejs.Joystick;
      stick.on('move', (evt1, data) => {
        this.move.emit({ ...data.vector });
      });
    });
  }

  ngOnDestroy(): void {
    this._manager && this._manager.destroy();
  }
}
