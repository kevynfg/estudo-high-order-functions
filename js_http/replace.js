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
};

Utils.formatCurrency(50000);
