_, a = int(input()), list(map(int, input().split()))
print(len(filter(lambda i : i > 0, a)))