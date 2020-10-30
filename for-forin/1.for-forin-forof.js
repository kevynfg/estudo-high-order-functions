const service = require('./service.js');

async function main() {
  try {
    const result = await service.getPeople('a');
    const names = [];
    for (pessoa of result.results) {
      names.push(pessoa.name);
    }
    console.log(names);
  } catch (error) {
    console.error('Deu ruim', error);
  }
}

main();
