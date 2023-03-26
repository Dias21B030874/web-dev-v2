n = int(input())
x = 0
while 2 ** x <= n:
    print(2 ** x, end=' ')
    x += 1