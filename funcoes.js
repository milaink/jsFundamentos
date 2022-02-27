//DECLARAÇÃO DE FUNÇÃO

// 1) declara a função

function imprimir(texto) {
    console.log(texto);
}

// 2) executa a função (1 ou + vezes)

imprimir();
imprimir('oi');
imprimir('opa, como vai?');
imprimir(soma());

// 3 formas de escrever funções

function soma() {
    //varios códigos
    //varios consoles.log
    return 2 + 2;
}

console.log(soma());

//Maths

console.log(Math.round(8.6)); //faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
console.log(Math.ceil(8.6)); //Faz o arredondamento para o valor mais alto
console.log(Math.floor(8.6)); //Faz o arredondamento para o valor mais baixo
console.log(Math.trunc(8.6)); //Desconsidera os números decimais, o que é conhecido como truncamento.
console.log(Math.pow(4, 2)); //Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3).
console.log(Math.sqrt(64)); //Retorna a raiz quadrada de um número.
console.log(Math.min(64, 36, 15, 28.6, 47)); //Retorna o menor valor entre os argumentos.
console.log(Math.max(64, 36, 15, 28.6, 47)); //Retorna o maior valor entre os argumentos.
console.log(Math.random()); //Retorna um valor randômico (random em inglês) entre 0 e 1
console.log(Math.random());

// declaração de função - pode criar a função depois de imprimir
function minhaFuncao(param) {
    //bloco de código
}
minhaFuncao("param");

// expressão de função - 1º cria o const e depois imprime

const somas = function(num1, num2) { return num1 + num2 };
console.log(somas(2, 2));

//diferenças principais

// declaração de função pode ser imprimido antes de criar a função
console.log(apresentar());

function apresentar() {
    return "olá";
}