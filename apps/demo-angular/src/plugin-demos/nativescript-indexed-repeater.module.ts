import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptIndexedRepeaterComponent } from './nativescript-indexed-repeater.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptIndexedRepeaterComponent }])],
  declarations: [NativescriptIndexedRepeaterComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptIndexedRepeaterModule {}
