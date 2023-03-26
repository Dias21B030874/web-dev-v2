a, b, c, d = int(input()), int(input()), int(input()), int(input())
print(*filter(lambda i : i % d == c, list(range(a, b + 1))))