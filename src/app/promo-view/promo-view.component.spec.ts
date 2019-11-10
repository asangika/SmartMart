import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoViewComponent } from './promo-view.component';

describe('PromoViewComponent', () => {
  let component: PromoViewComponent;
  let fixture: ComponentFixture<PromoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
