arr = list(map(int,input().split()))
dic = {}
for items in arr:
  if items in dic:
    dic[items] += 1
  else:
    dic[items] = 1
max_key =0
max_value = 0
min_key = None
min_value = float('inf')
for key,value in dic.items():
  if value > max_value:
    max_key,max_value=key , value 
  if value < min_value:
    min_key,min_value=key, value
print("max:",max_key,"->",max_value)
print("min:",min_key,"->",min_value)