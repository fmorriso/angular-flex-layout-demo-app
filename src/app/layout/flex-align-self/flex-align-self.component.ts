import {Component} from '@angular/core';

const ALIGN_OPTIONS = ['auto', 'start', 'center', 'baseline', 'end', 'stretch'];

@Component({
  selector: 'demo-flex-align-self',
  templateUrl: './flex-align-self.component.html'
})
export class FlexAlignSelfComponent {
  alignTo = 'center';

  toggleAlignment() {
    const j: number = ALIGN_OPTIONS.indexOf(this.alignTo);
    this.alignTo = ALIGN_OPTIONS[(j + 1) % ALIGN_OPTIONS.length];
  }
}
