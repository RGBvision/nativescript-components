import { Repeater, ItemsSource } from '@nativescript/core/ui/repeater';

export class IndexedRepeater extends Repeater {
  constructor() {
    super();
  }

  refresh() {
    if (!this.items) {
      return;
    }

    const length = this.items.length;

    for (let i = 0; i < length; i++) {
      const dataItem = this.__getDataItem(i);
      dataItem.index = i;
    }

    super.refresh();
  }

  private __getDataItem(index: number): any {
    const items = <ItemsSource>this.items;
    return items.getItem ? items.getItem(index) : this.items[index];
  }
}
