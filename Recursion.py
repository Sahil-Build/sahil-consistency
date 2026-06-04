n = int(input())
def print_name(n):
  if n < 1:
    return
  print(n)
  print_name(n-1)
print_name(n)
  