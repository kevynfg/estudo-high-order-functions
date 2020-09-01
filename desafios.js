const {shopCart, passengers, childrenAge, mailList } = require('./data');

//Cria um objeto que adiciona o ano de nascimento das crianças
const NovaIdade = childrenAge.map(idades => {
    return {
        age: idades,
        birthYear: 2020 - idades
    };
});

console.log(NovaIdade);

//Outra forma
const children = childrenAge.reduce((list, Idade) => {

    list.push ({
        Idade,
        Nascimento: 2019 - Idade
    });

    //sempre que chegar aqui, o push de cima, joga no return preenchendo
    //esse array
    return [... list];

//O array de baixo é o resultado de todo o push no array de cima
}, [] );

console.log(children);

//O split divide os endereços em dois, quando se tira o @
//tornando o mailList, primeiro item do array robson@rocketseat.com
// assim ['robson', 'rocketseat.com']
const domains = mailList.map(mail => {
    const mailArray = mail.split('@');

    //Retorna o segundo item do array
    return mailArray[1]
});

console.log(domains);

//Retorna o maior valor dos produtos abaixo de 100
//filtra o produto menor que 100, e termina com um sort
//do maior para o menor B + A
const MaiorDosMenores = shopCart
.filter(product => product.unitPrice <= 100)
.sort((a, b) => b + a)[0]

console.log(MaiorDosMenores);

//Outra forma

const Abaixo100 = shopCart
.filter(product => product.unitPrice <= 100)
.reduce ((lastProduct, currentProduct) => {
    
    //Verifica se o produto atual é menor que o ultimo produto verificado
    //e vai substituindo um pelo outro que for maior
    if (lastProduct.unitPrice > currentProduct.unitPrice) return lastProduct;
    //Retorna o produto atual que é maior
    return currentProduct;
},
{ unitPrice: 0 }) //defino que quero que no final me retorne um objeto chamado UniPrice que começa com valor 0

console.log(Abaixo100);