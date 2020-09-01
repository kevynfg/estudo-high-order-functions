const { shopCart, passengers } = require('../data');

//ordenar elementos
//ordenação segue a regra do unicode ASCII
//A-Z a-z
//numeros são tratados como string

//Neste calculo ele ordena do menor pro maior
//compara valor a e valor b
//se fizer 1 - 3 = negativo = 1 se mantem na frente
//se fizer 3 - 1 = é positivo = 3 passa pra trás na ordem
//se der 0, ele entende que não importa a ordem, os valores são iguais 
console.log (`ordernado: `,
[2, 3, 1, 5].sort((valor_a, valor_b) => valor_a - valor_b)
)

//Organizar o carrinho pelo número de produtos maior para menor
const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity);
console.log(orderByTotalProducts);

//Organizar por nome dos passageiros
const orderByPassengerName = passengers.sort((passengerA, passengerB) => {
    // -1 compara se o nome do passageiro é menor e coloca atrás
    if (passengerA.name.toLowerCase() < passengerB.name.toLowerCase()) return -1 
    // 1 compara se o nome do passageiro é maior e coloca na frente
    if (passengerA.name.toLowerCase() > passengerB.name.toLowerCase()) return 1
    //se não
    return 0;
})

console.log(orderByPassengerName);