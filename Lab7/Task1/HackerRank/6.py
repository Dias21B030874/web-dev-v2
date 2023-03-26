def is_leap(year) -> bool:
    return bool(year % 400 == 0 or (year % 4 == 0 and year % 100))

year = int(input())
print(is_leap(year))