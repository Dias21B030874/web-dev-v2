import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './components/company/company.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { HomeComponent } from './components/pages/home/home.component';
import { VacancyByCompanyComponent } from './components/pages/vacancy-by-company/vacancy-by-company.component';
import { TopTenComponent } from './components/pages/top-ten/top-ten.component';
import { VacancyDetailsComponent } from './components/pages/vacancy-details/vacancy-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    VacancyComponent,
    HomeComponent,
    VacancyByCompanyComponent,
    TopTenComponent,
    VacancyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
