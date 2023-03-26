def sum13(nums):
  while 13 in nums:
    x = nums.index(13)
    nums.remove(13)
    if x < len(nums):
      del nums[x]
  return sum(nums)