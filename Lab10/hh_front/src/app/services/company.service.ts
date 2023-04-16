import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, Vacancy } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.BASE_URL}/companies`)
  }
  getCompany(company_id:number): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/companies/${company_id}/`);
  }

  deleteCategory(company_id: number): Observable<any> {
    return this.http.delete(
      `${this.BASE_URL}/companies/${company_id}/`
    )
}
}
