n, a = int(input()), list(map(int, input().split()))
for i in range(n - 1):
    if (a[i] < 0 and b[i + 1] < 0) or (a[i] >= 0 and a[i + 1] >= 0):
        print('YES')
        break
else:
    print('NO')