def front_back(str):
  return str[-1] + str[1:-1] + str[0] if len(str) > 1 else str
