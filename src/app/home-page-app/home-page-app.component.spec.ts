import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAppComponent } from './home-page-app.component';

describe('HomePageAppComponent', () => {
  let component: HomePageAppComponent;
  let fixture: ComponentFixture<HomePageAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
