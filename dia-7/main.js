/*
Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima". 
*/

let operacao = 0;

while (operacao != 5) {
    operacao = prompt("Seja bem vindo à calculadora!\nQual operação você deseja realizar?\n- Digite 1 para soma.\n- Digite 2 para subtração.\n- Digite 3 para multiplicação.\n- Digite 4 para divisão.\n- Digite 5 para sair.");
    if (operacao != 1 && operacao != 2 && operacao != 3 && operacao != 4 && operacao != 5) {
        alert("Digite uma opção válida.");
    }
    if (operacao == 5) {
        alert("Até a próxima!");
        break;
    }
    numero1 = prompt("Digite o primeiro valor.")
    numero2 = prompt("Digite o segundo valor.")
    if (operacao == 1) {
        let soma = somar(numero1, numero2);
        alert(`A soma de ${numero1} e de ${numero2} é ${soma}.`)
    }
    

    if (operacao == 2) {
        let subtracao = subtrair(numero1, numero2);
        alert(`A subtração de ${numero1} e de ${numero2} é ${subtracao}.`)
    }
    
    if (operacao == 3) {
        let multiplicacao = multiplicar(numero1, numero2);
        alert(`A multiplicação de ${numero1} e de ${numero2} é ${multiplicacao}.`)
    }
    
    if (operacao == 4) {
        let divisao = dividir(numero1, numero2);
        alert(`A divisão de ${numero1} e de ${numero2} é ${divisao}.`)
    }
}

function somar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtrair(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiplicar(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function dividir(num1, num2) {
    return parseInt(num1)/parseInt(num2);
}