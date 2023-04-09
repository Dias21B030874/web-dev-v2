from django.db import models


# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=256, default='')
    description = models.TextField(default='')
    city = models.CharField(max_length=256, default='')
    address = models.TextField(default='')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

    def __str__(self):
        return f'{self.name} | {self.city}'


class Vacancy(models.Model):
    name = models.CharField(max_length=256, default='')
    description = models.TextField(default='')
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.name
        }

    def __str__(self):
        return f'{self.name} | {self.salary}'
