import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingItemsComponent } from './interesting-items.component';

describe('InterestingItemsComponent', () => {
  let component: InterestingItemsComponent;
  let fixture: ComponentFixture<InterestingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
