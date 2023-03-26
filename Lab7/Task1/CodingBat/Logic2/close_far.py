def close_far(a, b, c):
  return (abs(a - b) <= 1 or abs(a - c) <= 1) and ((abs(b - a) >= 2 and abs(b - c) >= 2) or (abs(c - a) >= 2 and abs(c - b) >= 2))