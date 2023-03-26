def pos_neg(a, b, negative):
  return (negative and a < 0 and b < 0) or (((a < 0 and b > 0) or (a > 0 and b < 0)) and not negative)
