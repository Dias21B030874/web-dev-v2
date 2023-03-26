a = int(input())
print('YES' if a % 400 == 0 or (a % 4 == 0 and a % 100) else 'NO')