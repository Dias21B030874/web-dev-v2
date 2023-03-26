def end_other(a, b):
  return a[-min(len(a), len(b)):].lower() == b[-min(len(a), len(b)):].lower()
