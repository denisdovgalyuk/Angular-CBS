import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDataDrivenComponent } from './add-product-data-driven.component';

describe('AddProductDataDrivenComponent', () => {
  let component: AddProductDataDrivenComponent;
  let fixture: ComponentFixture<AddProductDataDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductDataDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductDataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
