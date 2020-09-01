const { passengers } = require('../data.js');

//Não é imutável
//Não retorna novo objeto

//cria uma nova data Age enquanto passa por cada item
passengers.forEach(passenger => {
    passenger.age = 2020 - passenger.birthYear;
});
//retornar idade dos passegeiros

console.log(passengers);