def regressiva(x):
    print(x)
    regressiva(x - 1)

def fibonacci(x):
    i = 0
    num = 0
    numA = 1
    numB = 0
    while i < x:
        print(numA)
        num = numA + numB
        numB = numA
        numA = num
        i += 1

print(fibonacci(10))

def fibo(n):
    if n == 1 or n == 2:
        return 1
    else:
        return fibo(n-1) + fibo(n -2)

print(fibo(10))



def fatorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n*fatorial(n-1)




def fatorial2(n):
    fat = 1
    if n == 0 or n == 1:
        print(fat)
    else:
        for x in range(2, n + 1): #incrementa +1 para redundancia até o número desejado
            fat = fat*x
            print(fat)


print(fatorial2(10))