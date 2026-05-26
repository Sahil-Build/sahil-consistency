n1 = int(input())
n2 = int(input())

small = n1 if n1 < n2 else n2

gcd = 0

for i in range(1, small + 1):
    if n1 % i == 0 and n2 % i == 0:
        gcd = i

print(gcd)