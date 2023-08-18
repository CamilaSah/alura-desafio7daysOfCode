/*
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
*/


function gerarNumeroAleatorio (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let numero = gerarNumeroAleatorio(0, 10);

let chute = 0;

for (contador = 0; contador < 3; contador++) {
    chute = prompt("Adivinhe qual é o número que estou pensando. Digite um número entre 0 e 10.");
    if (chute == numero) {
        alert("Parabéns! Você acertou!");
        break;
    }
    if (contador < 2) {
        alert("Errou. Tente novamente.");
    }
    if (contador == 2) {
        alert(`Ah que pena!O número era ${numero}`);
        break;
    }
}
