import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariousListComponent } from './various-list.component';

describe('VariousListComponent', () => {
  let component: VariousListComponent;
  let fixture: ComponentFixture<VariousListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariousListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariousListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
