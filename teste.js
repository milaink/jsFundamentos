let duracoes = [1.05, 2.28, 1.36, 1.68, 1.5];
let dias = 0;
let tempo = [];

for (var i = 0; i < duracoes.length; i++) {
    let val = duracoes[i];

    if (tempo.indexOf(i) == -1) {
        let x;

        for (var j = 0; j < duracoes.length; j++) {
            if (val + duracoes[j] <= 3 && tempo.indexOf(j) == -1 && i != j) {
                if (duracoes[j] > duracoes[x] || x == undefined) {
                    x = j
                }
            }
        }

        if (x == undefined) {
            tempo.push(i);
            dias++;
        } else {
            dias++;
            tempo.push(i);
            tempo.push(x);
        }
    }

}
console.log(dias);
console.log(tempo);
console.log(duracoes);