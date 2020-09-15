from functools import partial
import collections
from operator import attrgetter
pessoas = collections.namedtuple('pessoa', 'nome idade')
pessoas = [pessoas('Joao', 40), pessoas('Ana', 20), pessoas('Renata', 25)]

sort_nome = partial(sorted, key=attrgetter('nome'))
sort_idade = partial(sorted, key=attrgetter('idade'))

print(sort_nome(pessoas))
print(sort_idade(pessoas))
