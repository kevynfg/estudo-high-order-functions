//Replace usa regex ou não, você escolhe
//usando replace(/\D/g, "") você remove tudo de uma string todos caracteres e transforma em números

//Formatações
const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? '-' : '';

    value = String(value).replace(/\D/g, '');

    value = Number(value) / 100; //Se o valor for 50002, ele quebra para 500.02

    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    console.log(signal + value);
  },

  formatAmount(value) {
    //Dessa forma ele faz o esquema de multiplicar para depois dividir por 100 e deixar o valor de dinheiros corretamente
    //o replace é pra tirar 'pontos' e 'virgulas' antes de formatar o valor
    value = Number(value.replace(/\,\./g, '')) * 100;
  },
};

//O truque para formatar um número, é multiplicar por 100 e depois na função, dividir por 100
Utils.formatCurrency(5 * 100);
