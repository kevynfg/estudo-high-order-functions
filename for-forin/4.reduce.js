const { getPeople } = require('./service.js');

Array.prototype.meuReduce = function (callback, valorInicial) {
  //Se entrar um valor válido, ele simplesmente continua sendo valorInicial
  //se não, acessa o parâmetro passado pelo usuário na primeira posição
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
  for (let index = 0; index <= this.length; index++) {
    valorFinal = callback(valorFinal, this[index], this);
  }
  return valorFinal;
};

main();

async function main() {
  try {
    const { results } = await getPeople(`a`);
    // const height = results.map((item) => parseInt(item.height));
    // const total = height.reduce((prev, current) => {
    //   return prev + current;
    // });

    const myList = [
      ['Kevyn', 'Faria'],
      ['React', 'JavaScript'],
    ];
    const total = myList
      .meuReduce((prev, current) => {
        return prev.concat(current);
      }, [])
      .join(',');

    console.log('Result: ', total);
  } catch (error) {
    console.log('Erro', error);
  }
}
