def caught_speeding(speed, is_birthday):
  speed -= 5 * is_birthday
  if speed <= 60:
    return 0
  elif speed <= 80:
    return 1
  return 2
