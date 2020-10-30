const { getPeople } = require('./service.js');

Array.prototype.meuFilter = function (callback) {
  const lista = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    if (!result) continue;
    lista.push(item);
  }
  return lista;
};

/*
const familiaLars = results.meuFilter((item, index, lista)   => {return item.name.toLowerCase().indexOf('lars') !== -1)}
})
*/

async function main() {
  try {
    const { results } = await getPeople(`a`);

    const familiaLars = results.filter((item) => {
      const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
      return result;
    });
    const names = familiaLars.map((pessoa) => pessoa.name);
    console.log(names);
  } catch (error) {
    console.error(`Deu Ruim`, error);
  }
}

main();
