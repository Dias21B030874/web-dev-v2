def sum67(nums):
  sum = 0
  flag = False
  for i in nums:
    if i == 7 and flag:
      flag = False
      continue
    elif i == 6 and not flag:
      flag = True
      continue
    elif flag:
      continue
    sum += i
  return sum
