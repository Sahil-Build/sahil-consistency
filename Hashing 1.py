arr = list(map(int,input().split()))
freq = {}
for num in arr:
  if num in freq:
    freq[num]  += 1
  else:
    freq[num] = 1
queries = list(map(int,input().split()))
for q in queries:
  if q in freq:
    print(q,"->",freq[q])
  else:
    print(q,"->",0)