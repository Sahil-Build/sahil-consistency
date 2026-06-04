n = int(input())
def fact(n,ans):
  if(n==1):
    print(ans)
    return
  fact(n-1,ans*n)
fact(n,1)