import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallUsBannerComponent } from './call-us-banner.component';

describe('CallUsBannerComponent', () => {
  let component: CallUsBannerComponent;
  let fixture: ComponentFixture<CallUsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallUsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallUsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
