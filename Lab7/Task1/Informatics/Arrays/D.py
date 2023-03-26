n, a = int(input()), list(map(int, input().split()))
cnt = 0
for j in range(n - 1):
    cnt += a[j + 1] > a[j]
print(cnt)