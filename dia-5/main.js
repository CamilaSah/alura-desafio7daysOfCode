/* Você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
Existe um objeto dentro da linguagem Javascript que é usado justamente para criar listas de elementos, chamado Array.
Para criar um array vazio, você pode usar colchetes. E aí, para inserir algo em um array, você pode usar a função .push().
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


while (adicionaItens !== "Não" && adicionaItens !== "não" && adicionaItens !== "Nao" && adicionaItens !== "nao") {
    adicionaItens = prompt("Você deseja adicionar uma comida na sua lista de compras? Sim ou não?");
    if (adicionaItens !== "Não" && adicionaItens !== "não" && adicionaItens !== "Nao" && adicionaItens !== "nao") {
        let comida = 0;
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa? Frutas, laticínios, verduras, congelados, doces ou outros?");
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
}

alert(`Lista de Compras: \n Congelados: ${listaDeCompras.congelados} \n Doces: ${listaDeCompras.doces} \n Frutas: ${listaDeCompras.frutas} \n Laticínios: ${listaDeCompras.laticinios} \n Verduras: ${listaDeCompras.verduras} \n Outros: ${listaDeCompras.outros}`);

