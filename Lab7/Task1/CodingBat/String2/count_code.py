def count_code(str):
  cnt = 0
  for i in range(len(str) - 3):
    x = str[i:i + 4]
    cnt += x[0] == 'c' and x[1] == 'o' and x[3] == 'e'
  return cnt
