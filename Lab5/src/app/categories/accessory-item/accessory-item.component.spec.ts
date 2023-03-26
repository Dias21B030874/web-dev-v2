import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryItemComponent } from './accessory-item.component';

describe('AccessoryItemComponent', () => {
  let component: AccessoryItemComponent;
  let fixture: ComponentFixture<AccessoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
