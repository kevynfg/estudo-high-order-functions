var p = [1, 2, 3, 4, 5];
const names = ['link', 'listen', 'hey', 'tchau', 'oi'];
const newNames = [];
for (let i = 0; i < names.length; i++) {
  newNames.push(names[i]);
}

const n = new Array(p)
  .fill(0)
  .map((_, i) => i)
  .map((i) => newNames[i % newNames.length]);

// -> Este código todo recebe algum input por ex: se fosse a variável 'names', itera e adiciona os nomes num array
// -> cria 'n' como um array com um único numero 0 <- o 0 é importante pois ele define o primeiro calculo feito até o final
// -> do código.
// -> mapeia cada indice
// -> e se tiver 8 indices, ele verifica o '%' de cada um comparando com o length, no caso quando chegar no ultimo
// -> o i % array.length vai ser = 0, significando que chegou no ultimo item do array
console.log(n[n.length - 1]);
