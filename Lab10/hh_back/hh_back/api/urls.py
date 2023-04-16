from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:company_id>/', views.company),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.VacanciesView.as_view()),
    path('vacancies/<int:vacancy_id>/', views.VacancyView.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesView.as_view()),
]