import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from 'src/app/models/models';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-vacancy-by-company',
  templateUrl: './vacancy-by-company.component.html',
  styleUrls: ['./vacancy-by-company.component.css']
})
export class VacancyByCompanyComponent {
  company_id!: number;
  vacancies: Vacancy[] = [];
  loading = false;

  constructor(
    private vacancyService: VacancyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = true;
    this.company_id = this.route.snapshot.params['id'];
    this.vacancyService.getVacanciesByCompanyId(this.company_id).subscribe((vacancies) => {
      this.loading = false;
      this.vacancies = vacancies;
    });
}
}
