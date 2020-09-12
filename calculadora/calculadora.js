const click = document.getElementById('calculadora')

click.addEventListener('click', function(event) {
    console.log(event.target.id)
    const operacao = event.target
    switch(operacao){
        case x:
            console.log(1+1)
            break
        default:
            console.log('fudeu')
            break
    }
})