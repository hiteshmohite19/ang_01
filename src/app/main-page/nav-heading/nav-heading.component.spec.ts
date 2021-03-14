import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeadingComponent } from './nav-heading.component';

describe('NavHeadingComponent', () => {
  let component: NavHeadingComponent;
  let fixture: ComponentFixture<NavHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
