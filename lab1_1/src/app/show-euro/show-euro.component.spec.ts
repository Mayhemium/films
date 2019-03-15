import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEuroComponent } from './show-euro.component';

describe('ShowEuroComponent', () => {
  let component: ShowEuroComponent;
  let fixture: ComponentFixture<ShowEuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
