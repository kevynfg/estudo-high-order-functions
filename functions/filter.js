const { childrenAge, mailList } = require('../data.js');

//filter tem que retornar um true ou false

const childrenFiltered = childrenAge.filter(
    element => element >= 2 && element <= 11 ? true : false
);

//Filtrar crianças com idade entre 2 até 11 anos

//IMUTABILIDADE - a high order function não muda objetos
//precisa declarar uma nova variavel
console.table(childrenFiltered)


//includes busca uma string
const filteredMails = mailList.filter( mail => mail.includes("@rocketseat.com"));

//Busque E-mails da rocketseat

console.table(filteredMails);