import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptIndexedRepeater } from '@demo/shared';
import {} from '@rgbvision/nativescript-indexed-repeater';

@Component({
  selector: 'demo-nativescript-indexed-repeater',
  templateUrl: 'nativescript-indexed-repeater.component.html',
})
export class NativescriptIndexedRepeaterComponent {
  demoShared: DemoSharedNativescriptIndexedRepeater;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptIndexedRepeater();
  }
}
