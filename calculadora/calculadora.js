const click = document.getElementById('calculadora');
let display = 0;

click.addEventListener('click', function (event) {
  const itemClicado = event.target;
  console.log(itemClicado.innerHTML);
  const operacao = event.target;
  switch (operacao.innerHTML) {
    case 1:
      display + 1;
      break;
    case 2:
      display += display + 2;
      break;
    case 3:
      display += display + 3;
      break;
    case 4:
      display += display + 4;
      break;
    case 5:
      display += display + 5;
      break;
    case 6:
      display += display + 6;
      break;
    case 7:
      display += display + 7;
      break;
    case 8:
      display += display + 8;
      break;
    case 9:
      display += display + 9;
      break;
    default:
      console.log('fudeu');
      break;
  }
});
console.log(display);
