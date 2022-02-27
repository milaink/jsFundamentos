function apresentar(nome) {
    return `Meu nome é ${nome}`
}

// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;
//const soma = (num1, num2) => num1 + num2;

//Arrow function com mais de uma linha de instrução, se comporta como expressão de função

const somaNumerosPequenos = (num1, num2) => {
    if (num1 < 10 && num2 < 10) {
        return num1 + num2;
    } else {
        return "somente números de 1 a 9"
    }
}
console.log(somaNumerosPequenos(111, 1));



//operador de maior ou igual que >=