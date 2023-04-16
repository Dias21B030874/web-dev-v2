import { Component } from '@angular/core';
import { Vacancy } from 'src/app/models/models';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent{
  @Input()
  vacancies: Vacancy[] = [];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.vacancyService.getVacancies().subscribe((vacancies) => {
      this.loading = false;
      this.vacancies = vacancies;
    });
  }
  viewDetails(vacancy: Vacancy) {
    this.router.navigate(['/vacancies', vacancy.id]);
  }
}