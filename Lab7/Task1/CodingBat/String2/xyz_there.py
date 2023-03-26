def xyz_there(str):
  str = 'a' + str
  for i in range(len(str) - 3):
    x = str[i: i + 4]
    if x[0] != '.' and x[1:] == 'xyz':
      return True
  return False
