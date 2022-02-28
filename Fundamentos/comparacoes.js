// == (comparação implícita)
// só compara o valor
const numero = 5;
const texto = "5";

function imprimir(text) {
    console.log(text);
}

imprimir(numero == texto);

// === compara o valor e o tipo de dado
imprimir(numero === texto);

//typeof
imprimir(typeof numero);
imprimir(typeof texto);