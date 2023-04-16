import { Component, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/models/models';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  vacancies: Vacancy[] = [];
  loading = false;

  constructor(private vacancyService: VacancyService) {}

  ngOnInit() {
    this.loading = true;
    this.vacancyService.getTop10Vacancies().subscribe((vacancies) => {
      this.loading = false;
      this.vacancies = vacancies;
    });
  }

}
