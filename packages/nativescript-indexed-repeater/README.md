# @rgbvision/nativescript-indexed-repeater

Adds the ability to get the index of an item for a Repeater UI component.

Can be used in `itemTemplateSelector` or in item's event handler.

## Installation
```javascript
ns plugin add @rgbvision/nativescript-indexed-repeater
```

## Usage

XML:
```xml
<ir:IndexedRepeater items="{{ items }}">
  <ir:IndexedRepeater.itemsLayout>
    <StackLayout orientation="vertical"/>
  </ir:IndexedRepeater.itemsLayout>
  <ir:IndexedRepeater.itemTemplate>
    <Label text="{{ title }}" margin="10" tap="onItemTap"/>
  </ir:IndexedRepeater.itemTemplate>
</ir:IndexedRepeater>
```

Make sure you include `xmlns:ir="@rgbvision/nativescript-indexed-repeater"` on the Page element

TypeScript:
```typescript
export function onItemTap(event: ItemEventData) {
  const itemData = event.view.bindingContext;
  console.log(`Item index: ${itemData.index}`);
}
```

## Warning

Plugin overrides `bindingContext.index` value.
