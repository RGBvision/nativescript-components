import { DemoSharedBase } from '../utils';
import { ItemEventData, ObservableArray } from '@nativescript/core';

export class DemoSharedNativescriptIndexedRepeater extends DemoSharedBase {
  items: ObservableArray<any>;
  _items: any[];

  constructor() {
    super();

    if (!this._items) {
      const count = 10;
      this._items = [];
      for (let i = 0; i < count; i++) {
        this._items.push({
          title: `Item id ${i}`,
        });
      }
    }

    this.items = new ObservableArray(this._items);
  }
}
