lista = [1, 2, 3, 4, 5]


def impares(iterable):
    lista_aux = []
    for item in iterable:
        if item % 2 != 0:
            lista_aux.append(item)
    return lista_aux


nova_lista = impares(lista)
print(nova_lista)

lista2 = [1, 2, 3, 4, 5]


def impar(item):
    return item % 2 != 0


nova_lista2 = filter(impar, lista)
print(list(nova_lista2))

lista3 = [1, 2, 3, 4, 5]

nova_lista3 = filter(lambda item: item % 2 != 0, lista)

print(list(nova_lista3))
