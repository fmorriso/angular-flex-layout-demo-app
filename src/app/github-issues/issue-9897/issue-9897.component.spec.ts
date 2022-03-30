import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Issue9897Component } from './issue-9897.component';

describe('Issue9897Component', () => {
  let component: Issue9897Component;
  let fixture: ComponentFixture<Issue9897Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [Issue9897Component],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue9897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
