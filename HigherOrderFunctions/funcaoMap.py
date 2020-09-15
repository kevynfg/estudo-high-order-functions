lista = [1, 2, 3, 4, 5]


def triplica_itens(iterable):
    lista_aux = []
    for item in iterable:
        lista_aux.append(item*3)
    return lista_aux


nova_lista = triplica_itens(lista)
print(nova_lista)


lista2 = [1, 2, 3, 4, 5]


def triplica(item):
    return item * 3


nova_lista2 = map(triplica, lista)

# o map retorna um iterável, por isso deve-se criar uma nova list
print(list(nova_lista2))


lista3 = [1, 2, 3, 4, 5]

nova_lista3 = map(lambda item: item*3, lista)

print(list(nova_lista3))
