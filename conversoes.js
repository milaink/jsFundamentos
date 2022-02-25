// tipo de dado

// booleanos

//conversão impicita
const numero = 789; //ou
const numero2 = Number("789");
const numeroS = '789';
const numero3 = Number("78lk9");

console.log(numero == numeroS); //analisa só visualmente o que há dentro
console.log(numero === numeroS); // analisa conteudo e tipo de variavel

//Number()

//String()
console.log(numero3);
console.log(numero + numero2);
console.log(numero + Number(numeroS));

//conversão explicita