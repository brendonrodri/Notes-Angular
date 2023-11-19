import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersProductsComponent } from './others-products.component';

describe('OthersProductsComponent', () => {
  let component: OthersProductsComponent;
  let fixture: ComponentFixture<OthersProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OthersProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
