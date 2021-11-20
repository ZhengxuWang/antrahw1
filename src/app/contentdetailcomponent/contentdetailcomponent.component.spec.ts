import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentdetailcomponentComponent } from './contentdetailcomponent.component';

describe('ContentdetailcomponentComponent', () => {
  let component: ContentdetailcomponentComponent;
  let fixture: ComponentFixture<ContentdetailcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentdetailcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentdetailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
