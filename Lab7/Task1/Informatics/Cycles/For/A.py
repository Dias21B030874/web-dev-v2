a = int(input())
print(*range(a + a % 2, int(input()) + 1, 2))