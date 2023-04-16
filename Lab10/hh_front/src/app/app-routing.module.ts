import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacancyByCompanyComponent } from './components/pages/vacancy-by-company/vacancy-by-company.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { VacancyDetailsComponent } from './components/pages/vacancy-details/vacancy-details.component';
import { TopTenComponent } from './components/pages/top-ten/top-ten.component';
const routes: Routes = [
  { path: 'companies/:id', component: VacancyByCompanyComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'vacancies', component: VacancyComponent},
  {path: 'vacancies/top_ten', component: TopTenComponent},
  { path: 'vacancies/:id', component: VacancyDetailsComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
