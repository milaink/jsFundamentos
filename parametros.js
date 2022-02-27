//parametros de função

function soma(n1, n2) {
    return n1 + n2;
}

function imprimir(text) {
    console.log(text);
}

imprimir(soma(2, 2));
imprimir(soma(258, 36));
imprimir(soma(85, 998));

//parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

imprimir(nomeIdade('Camila', 32));

function multiplica(n1 = 1, n2 = 1) {
    return n1 * n2;
}

imprimir(multiplica(3, 2));
imprimir(multiplica(soma(3, 2), soma(3, 3)));
imprimir(multiplica(soma(3, 2), ));