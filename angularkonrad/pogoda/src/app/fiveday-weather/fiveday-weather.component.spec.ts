import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedayWeatherComponent } from './fiveday-weather.component';

describe('FivedayWeatherComponent', () => {
  let component: FivedayWeatherComponent;
  let fixture: ComponentFixture<FivedayWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivedayWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivedayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
