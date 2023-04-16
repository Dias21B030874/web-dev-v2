import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company,Vacancy } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies`)
  }
  getVacancy(vacancyId: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/vacancies/${vacancyId}`);
  }
  getVacanciesByCompanyId(company_id: number): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${company_id}/vacancies/`)
  }
  getTop10Vacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies/top_ten/`);
  }
}
