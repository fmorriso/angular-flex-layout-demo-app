import {Directive, Optional, Self} from '@angular/core';
import {DefaultFlexDirective} from '@angular/flex-layout';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngxSplitArea]',
  host: {
    style: 'overflow: auto;'
  }
})
export class SplitAreaDirective {
  constructor(@Optional() @Self() public flex: DefaultFlexDirective) {}
}
