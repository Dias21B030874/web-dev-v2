import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadItemComponent } from './ipad-item.component';

describe('IpadItemComponent', () => {
  let component: IpadItemComponent;
  let fixture: ComponentFixture<IpadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpadItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
