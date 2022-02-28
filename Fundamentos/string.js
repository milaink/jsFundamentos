//sobre Strings

let text1 = "Olá, Mundo!";
let text2 = 'Olá, Mundo!';
let senha = 'sdsdfdf2342323';
let nume = '5454564321';

let citacao = "Meu nome é ";
let nome = 'Camila';
let idade = 32;

// concatenar

console.log('Meu nome é ' + nome);

//Template literal
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)

// unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// comparação 
console.log('ALFABETO'.toLowerCase()); // 'alfabeto'

let cidade = "belo horizonte";
let input = "Belo Horizonte";
console.log(cidade === input);

input = input.toLowerCase();

console.log(cidade === input); // false
//console.log(cidade === inp);


//lenght
const sen = "minhaSenha123";
console.log(sen.length); // 13 caracteres

var x = 'Mozilla';
var empty = '';

console.log('Mozilla possui ' + x.length + ' unidades de código de comprimento');
/* "Mozilla possui 7 unidades de código de comprimento" */

console.log('A string vazia possui um comprimento de ' + empty.length);
/* "A string vazia possui um comprimento de 0" */

//comparando strings

var a = "c";
var b = "b";
if (a < b) // verdadeiro
    console.log(a + " é menor que " + b);
else if (a > b)
    console.log(a + " é maior que " + b);
else
    console.log(a + " e " + b + " são iguais.");

//Acesso à caractere

console.log('cat'.charAt(1)); // returns "a"

console.log('cat' [1]); // returns "a"