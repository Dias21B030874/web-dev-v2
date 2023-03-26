def last2(str):
  cnt = 0
  last2 = str[-2:]
  for i in range(len(str) - 2):
    cnt += last2 == str[i:i + 2]
  return cnt
