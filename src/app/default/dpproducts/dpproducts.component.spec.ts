import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpproductsComponent } from './dpproducts.component';

describe('DpproductsComponent', () => {
  let component: DpproductsComponent;
  let fixture: ComponentFixture<DpproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
