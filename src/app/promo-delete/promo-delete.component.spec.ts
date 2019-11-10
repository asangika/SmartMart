import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoDeleteComponent } from './promo-delete.component';

describe('PromoDeleteComponent', () => {
  let component: PromoDeleteComponent;
  let fixture: ComponentFixture<PromoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
