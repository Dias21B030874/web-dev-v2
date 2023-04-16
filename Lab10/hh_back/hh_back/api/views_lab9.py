from django.http import JsonResponse
from . import models
import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from api.models import Vacancy,Company

# CRUD - CRATE, READ, UPDATE, from django.shortcuts import render

@csrf_exempt
def companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [comp.to_json() for comp in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name','')
        company_desc = data.get('description','')
        company_city = data.get('city','')
        company_address = data.get('address','')

        if not all([company_name, company_desc, company_city, company_address]):
            return JsonResponse({'error': 'Missing required fields'}, status=400)
        
        company = Company.objects.create(
            name=company_name,
            description = company_desc,
            city = company_city,
            address = company_address)
        return JsonResponse(company.to_json())

@csrf_exempt
def company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)
    if request.method == 'GET':
        return JsonResponse(company.to_json(), status=200)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data.get('name','')
        company.description = data.get('description','')
        company.city = data.get('city','')
        company.address = data.get('address','')
        company.save()
        return JsonResponse(company.to_json(),status = 200)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({ 'message': 'Deleted successfully' }, status= 200)


def company_vacancies(request, company_id):
    company = Company.objects.get(id=company_id)
    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

@csrf_exempt
def vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        company_id = data.get('company_id',0)
        vacancy_name = data.get('name','')
        vacancy_description = data.get('description','')
        vacancy_salary = data.get('salary',0)
        try:
            company = Company.objects.get(pk=company_id)
        except Company.DoesNotExist as e:
            return JsonResponse({ 'message': str(e) }, status=400)

        if not all([vacancy_name, vacancy_description, vacancy_salary, company]):
            return JsonResponse({'error': 'Missing required fields'}, status=400)
        
        vacancy = Vacancy.objects.create(
            name = vacancy_name,
            description = vacancy_description,
            salary = vacancy_salary,
            company = company
        )
        return JsonResponse(vacancy.to_json(), status=200)

# {
#     "company_id": 5,
#     "name": "Software Engineer",
#     "description": "We are looking for a software engineer to join our team",
#     "salary": 5000
# }

@csrf_exempt
def vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except models.Vacancy.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)
    if request.method == 'GET':
         return JsonResponse(vacancy.to_json(), status=200)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data.get('name','')
        vacancy.description = data.get('description','')
        vacancy.salary = data.get('salary')
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'Deleted successfully'})

def top_ten_vacancies(request):
    vacancies = models.Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)