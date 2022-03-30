import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LayoutFillComponent } from './layout-fill.component';

describe('LayoutFillComponent', () => {
  let component: LayoutFillComponent;
  let fixture: ComponentFixture<LayoutFillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [LayoutFillComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
