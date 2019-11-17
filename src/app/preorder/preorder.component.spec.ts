import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreorderComponent } from './preorder.component';

describe('PreorderComponent', () => {
  let component: PreorderComponent;
  let fixture: ComponentFixture<PreorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
