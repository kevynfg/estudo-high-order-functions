const somou = (a) => {
    return a + a
}

const alertar = (val) => {
    console.log(`soma feita! deu ${val}`)
}

console.log(alertar(somou(5)));



const calculando = (a, b = 5) => {
    return a + b
}

function calculado() {
   return console.log(`calculou`)
}

function deuruim(){
    return console.log('deu ruim')
}

console.log(calculado(5).then(calculado(),deuruim()));
