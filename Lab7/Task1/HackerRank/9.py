if __name__ == '__main__':
    N = int(input())
    arr = []
    for _ in range(N):
        comm = input().split()
        if comm[0] == 'print':
            print(arr)
        elif comm[0] == 'sort':
            arr.sort()
        elif comm[0] == 'reverse':
            arr = arr[-1::-1]
        elif comm[0] == 'pop':
            arr.pop()
        elif comm[0] == 'append':
            arr.append(int(comm[1]))
        elif comm[0] == 'remove':
            arr.remove(int(comm[1]))
        else:
            arr.insert(int(comm[1]), int(comm[2]))