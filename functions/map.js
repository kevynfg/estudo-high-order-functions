const {passengers} = require('./data.js');

//IMUTABILIDADE
//retorna novo objeto respeitando o tamanho do objeto original
//retornando o array inteiro, mesmo mandando um array de 3 elementos
//e eu eliminar 2 elementos, ele aparece 2 undefined
//trabalha com arrays

//passa por cada item
const NewPassengers = passengers.map(passenger => {
    return `${passenger.name} tem ${2020 - passenger.birthYear} anos.`
});

//retornar a idade dos passageiros
console.log(NewPassengers);

//Encontrar palindromo
//O letter, recebe um parametro em cada item que o map passa
//Esse parametro sendo único, pega a primeira letra de cada item
const founds = passengers.map(passenger => {
   const reverseName = [].map.call(passenger.name, letter => letter)
   .reverse()
   .join('')

   if (reverseName.toLowerCase() === passenger.name.toLowerCase()) return `This is a palindrome: ${passenger.name}`;
});

//Map sempre retorna a lista inteira, então os que não forem palindrome
//ele retorna undefined
console.log(founds);
