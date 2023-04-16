import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/models';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies: Company[] = [];
  newCategory: string = '';
  loading = false;
  
  constructor(private router: Router,private companyService: CompanyService) {}
  ngOnInit() {
    this.loading = true;
    this.companyService.getCompanies().subscribe((companies) => {
      this.loading = true;
      this.companies = companies;
    });
  }
  viewVacancies(company: Company) {
    this.router.navigate(['/companies', company.id]);
  }

  deleteCategory(company_id: number) {
    this.companyService.deleteCategory(company_id).subscribe((data) => {
      this.companies = this.companies.filter((company) => company.id !== company_id);
    });
  }
}
