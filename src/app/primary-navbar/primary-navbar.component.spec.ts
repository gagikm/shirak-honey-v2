import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNavbarComponent } from './primary-navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('PrimaryNavbarComponent', () => {
  let component: PrimaryNavbarComponent;
  let fixture: ComponentFixture<PrimaryNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryNavbarComponent ],
      imports: [ NgbModule.forRoot() ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
