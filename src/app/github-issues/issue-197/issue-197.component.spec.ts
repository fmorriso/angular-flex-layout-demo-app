import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Issue197Component } from './issue-197.component';

describe('Issue197Component', () => {
  let component: Issue197Component;
  let fixture: ComponentFixture<Issue197Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [Issue197Component],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
