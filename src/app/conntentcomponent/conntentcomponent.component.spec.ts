import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConntentcomponentComponent } from './conntentcomponent.component';

describe('ConntentcomponentComponent', () => {
  let component: ConntentcomponentComponent;
  let fixture: ComponentFixture<ConntentcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConntentcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConntentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
