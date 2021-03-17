import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiUserComponent } from './edi-user.component';

describe('EdiUserComponent', () => {
  let component: EdiUserComponent;
  let fixture: ComponentFixture<EdiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
