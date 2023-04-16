import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyByCompanyComponent } from './vacancy-by-company.component';

describe('VacancyByCompanyComponent', () => {
  let component: VacancyByCompanyComponent;
  let fixture: ComponentFixture<VacancyByCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyByCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyByCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
