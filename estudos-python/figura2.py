"""neste exemplo, o range vai printar sequencia do 2 ao 12, indo de 4 em 4 valores"""
for item in range(2, 12, 4): 
    print(item)
for pares in range(0, 21, 1):
    if pares%2 == 0:
        print(f'{pares} é par')
    else:
        print(f'{pares} é ímpar')

soma_pares = 0
cont_pares = 0

for numero in range(1, 11, 1):
    if numero%2 == 0:
        soma_pares = soma_pares + numero
        cont_pares += 1
    else:
        continue

print(f'A soma acumulativa foi {soma_pares} e a quantidade de pares foi {cont_pares}')
print(f'A média dos números pares foi {soma_pares/cont_pares}')