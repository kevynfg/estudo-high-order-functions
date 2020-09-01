const { passengers } = require('../data.js');

//IMUTABILIDADE
//Encontrar passageiro com nome Enzo
const Enzo = passengers.find(
    passenger =>  passenger.name.toLowerCase() == 'enzo'
    );

console.table(Enzo);

