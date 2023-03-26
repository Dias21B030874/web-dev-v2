_, a = int(input()), list(map(int, input().split()))
print(*filter(lambda i : i % 2 == 0, a))