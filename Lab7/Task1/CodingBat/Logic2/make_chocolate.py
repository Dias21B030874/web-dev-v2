def make_chocolate(small, big, goal):
  goal -= min(goal // 5, big) * 5
  return -1 if small < goal else min(small, goal)
