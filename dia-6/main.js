/*
Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?
A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.
Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
Por fim, ele voltará para o ciclo inicial de perguntas.
Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.
Por exemplo: “Não foi possível encontrar o item dentro da lista!”
Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.
*/

let adicionaItens = 0;

const listaDeCompras = {
    "congelados": [],
    "doces": [],
    "frutas": [],
    "laticinios": [],
    "verduras": [],
    "outros": [],
}

while (adicionaItens != 3) {
    adicionaItens = prompt("O que você deseja fazer? \n- Digite 1 para adicionar um item na sua lista de compras. \n- Digite 2 para remover um item na sua lista de compras. \n- Digite 3 para visualizar a lista final e sair.");
    if (adicionaItens != 1 && adicionaItens != 2 && adicionaItens != 3) {
        alert("Digite uma opção válida.");
    }
    if (adicionaItens == 1) {
        let comida = 0;
        comida = prompt("Qual item você deseja adicionar?");
        categoria = prompt("Em qual categoria esse item se encaixa? Frutas, laticínios, verduras, congelados, doces ou outros?");
        if (categoria == "Frutas" || categoria == "frutas" || categoria == "Fruta" ||categoria == "fruta") {
            listaDeCompras.frutas.push(comida);
        }
        else if (categoria == "Laticínios" || categoria == "Laticinios" || categoria == "laticínios" ||categoria == "laticinios") {
            listaDeCompras.laticinios.push(comida);
        }
        else if (categoria == "Verduras" || categoria == "verduras" || categoria == "Verdura" ||categoria == "verdura") {
            listaDeCompras.verduras.push(comida);
        }
        else if (categoria == "Congelados" || categoria == "congelados" || categoria == "Congelado" ||categoria == "congelado") {
            listaDeCompras.congelados.push(comida);
        }
        else if (categoria == "Doces" || categoria == "doces" || categoria == "Doce" ||categoria == "doce") {
            listaDeCompras.doces.push(comida);
        }
        else if (categoria == "Outros" || categoria == "outros" || categoria == "Outro" ||categoria == "outro") {
            listaDeCompras.outros.push(comida);
        }
    }
    
    if (adicionaItens == 2) {
        var temComida = verificaLista();
        if (temComida === true) {
            comidaRemovida = prompt(`Qual item você deseja remover? \n- Congelados: ${listaDeCompras.congelados} \n- Doces: ${listaDeCompras.doces} \n- Frutas: ${listaDeCompras.frutas} \n- Laticínios: ${listaDeCompras.laticinios} \n- Verduras: ${listaDeCompras.verduras} \n- Outros: ${listaDeCompras.outros}`);
            var existeComida = removerComida(comidaRemovida);
            if (existeComida === false) {
                alert(`Não foi possível encontrar o item ${comidaRemovida} dentro da lista!`);
            }
        }
        else if (temComida === false) {
            alert(`Você precisa adicionar algum item antes.`);
        }
    }
}

if (adicionaItens == 3) {
    alert(`Lista de Compras: \n Congelados: ${listaDeCompras.congelados} \n Doces: ${listaDeCompras.doces} \n Frutas: ${listaDeCompras.frutas} \n Laticínios: ${listaDeCompras.laticinios} \n Verduras: ${listaDeCompras.verduras} \n Outros: ${listaDeCompras.outros}`);
}

function removerComida(comidaRemovida) {
    var existe = false;
    Object.keys(listaDeCompras).forEach(key => {
        const value = listaDeCompras[key];
        console.log(`${key}: ${value}`);
        const pos = value.indexOf(comidaRemovida);
        if (pos !== -1) {
            let itemRemovido = value.splice(pos, 1);
            alert(`O item ${itemRemovido} foi removido com sucesso!`);
            existe = true;   
        }
    })
    return existe;
}

function verificaLista() {
    var maiorZero = false;
    Object.keys(listaDeCompras).forEach(key => {
        const value = listaDeCompras[key];
        console.log(`${key}: ${value}`);
        let len = value.length;
        if (len > 0) {
            maiorZero = true;
        }
    })
    return maiorZero;
}