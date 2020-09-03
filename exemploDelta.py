import math
import minha_lib #importar a função de outra lib

a = eval(input("Entre com o coeficiente A da equação: "))
b = eval(input("Entre com o coeficiente B da equação: "))
c = eval(input("Entre com o coeficiente C da equação: "))

delta = minha_lib.calcularDelta(a, b, c)

print(f'O valor calculado de Delta foi {delta}')
#delta > 0 : equação tem 2 raízes reais
#delta = 0 : equação tem 1 raíz real
#delta < 0 : equação não tem raiz real

if delta > 0:
    print("A equação tem 2 raízes reais")
    raiz1 = (-b + math.sqrt(delta))/2*a
    raiz2 = (-b - math.sqrt(delta))/2*a
    print(f'As raízes da equação são: {raiz1} e {raiz2}')
elif delta == 0:
    print("A equação tem 1 raíz real")
    raiz = (-b + math.sqrt(delta))/2*a
    print(f'A raíze da equação é: {raiz}')
else: print("A equação não tem raiz real")