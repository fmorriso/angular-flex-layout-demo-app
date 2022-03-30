import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubIssuesComponent } from './github-issues.component';

describe('GithubIssuesComponent', () => {
  let component: GithubIssuesComponent;
  let fixture: ComponentFixture<GithubIssuesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [GithubIssuesComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
