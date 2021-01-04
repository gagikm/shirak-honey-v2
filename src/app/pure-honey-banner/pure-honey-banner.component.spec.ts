import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureHoneyBannerComponent } from './pure-honey-banner.component';

describe('PureHoneyBannerComponent', () => {
  let component: PureHoneyBannerComponent;
  let fixture: ComponentFixture<PureHoneyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureHoneyBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PureHoneyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
