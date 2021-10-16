import { EventData, ItemEventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptIndexedRepeater } from '@demo/shared';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function onItemTap(event: ItemEventData) {
  const itemData = event.view.bindingContext;
  console.log(`Item index: ${itemData.index}`);
}

export class DemoModel extends DemoSharedNativescriptIndexedRepeater {}
