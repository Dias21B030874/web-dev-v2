if __name__ == '__main__':
    n = int(input())
    arr = sorted(list(map(int, input().split())), reverse=True)
    for i in arr:
        if i != arr[0]:
            print(i)
            break
    