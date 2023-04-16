import { Component } from '@angular/core';
import { Vacancy } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent {
  vacancy_id!: number;
  vacancy!: Vacancy;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.vacancy_id = this.route.snapshot.params['id'];
    this.vacancyService.getVacancy(this.vacancy_id).subscribe((vacancy) => {
      this.loading = false;
      this.vacancy = vacancy;
    });
  }
}
