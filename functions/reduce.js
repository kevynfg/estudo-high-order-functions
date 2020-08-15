const { shopCart } = require('./data');
//Reduzir um objeto a um valor único e retorna o que eu quiser
//IMUTABILIDADE


//Qual o valor do carrinho de compras
const totalValue = shopCart.reduce((accumulator, item)=>
    accumulator + item.quantity * item.unitPrice
, 0);

console.log(totalValue);


//Quantidade total de produtos no carrinho
const totalProducts = shopCart.reduce((totalProduct, product) => {
    return totalProduct + product.quantity;
}, 0)

console.log(totalProducts);