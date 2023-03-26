if __name__ == '__main__':
    n = int(input().strip())
    print('Not Weird' if n % 2 == 0 and (2 <= n <= 5 or n > 20) else 'Weird')