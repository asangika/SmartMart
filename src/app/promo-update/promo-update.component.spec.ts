import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoUpdateComponent } from './promo-update.component';

describe('PromoUpdateComponent', () => {
  let component: PromoUpdateComponent;
  let fixture: ComponentFixture<PromoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
