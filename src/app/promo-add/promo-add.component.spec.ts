import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoAddComponent } from './promo-add.component';

describe('PromoAddComponent', () => {
  let component: PromoAddComponent;
  let fixture: ComponentFixture<PromoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
