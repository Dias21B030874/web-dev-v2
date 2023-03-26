x = int(input())
print('YES' if x and (not (x & (x - 1))) else 'NO')