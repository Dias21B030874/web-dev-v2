import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopItemComponent } from './laptop-item.component';

describe('LaptopItemComponent', () => {
  let component: LaptopItemComponent;
  let fixture: ComponentFixture<LaptopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
