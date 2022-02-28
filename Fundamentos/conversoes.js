// tipo de dado

// booleanos

//conversão impicita
const numero = 789; //ou
const numero2 = Number("789");
const numeroS = '789';
const numero3 = Number("78lk9");

console.log(numero == numeroS); //analisa só visualmente o que há dentro
console.log(numero === numeroS); // analisa conteudo e tipo de variavel

console.log(numero3);
console.log(numero + numero2);
console.log(numero + Number(numeroS));

//Number()

let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura));

let meuNome = "leonardo";
console.log(Number(meuNome));
console.log(+meuNome);

let usuarioConectado = false;
console.log(Number(usuarioConectado));
usuarioConectado = true;
console.log(Number(usuarioConectado));

//String()

let telefone = 12341234;
console.log("O telefone é " + String(telefone));
console.log("O telefone é " + telefone.toString());

let usuarioConectado2 = false;
console.log(String(usuarioConectado2)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado2 = true;
console.log(String(usuarioConectado2)); // agora teremos uma string “true”.
//conversão explicita