/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.
*/

let area = 0;

while (area != 1 && area != 2) {
    area = prompt("Qual área você quer seguir? Front-End ou Back-End? Responda com o número 1 para Front-End ou 2 para Back-End.");
    if (area != 1 && area != 2){
        alert("Digite uma opção válida.");
    }
}

if (area == 1) {
    let front = 0;
    while (front != 1 && front != 2) {
        front = prompt("Você deseja aprender React ou Vue? Responda com o número 1 para React ou 2 para Vue.");
        if (front != 1 && front != 2){
            alert("Digite uma opção válida.");
        }
    }
    if (front == 1) {
        alert("Legal! O ReactJS é uma das bibliotecas de JavaScript mais populares para desenvolvimento de aplicativos web ou para dispositivos móveis.");
    }
    else if (front == 2) {
        alert("Muito bom! O Vue.js faz a utilização de um DOM virtual, o que faz com que seja extremamente performático na maioria das situações."); 
    }   
}
else {
    let back = 0;
    while (back != 1 && back != 2) {
        back = prompt("Você deseja aprender C# ou Java? Responda com o número 1 para C# ou 2 para Java.");
        if (back != 1 && back != 2){
            alert("Digite uma opção válida.");
        }
    }
    if (back == 1) {
        alert("Legal! O C# é uma linguagem de programação moderna, orientada a objeto e fortemente tipada.");
    }
    else if (back == 2) {
        alert("Muito bom! O Java é uma linguagem de programação amplamente usada para codificar aplicações Web. Ela tem sido uma escolha popular entre os desenvolvedores há mais de duas décadas, com milhões de aplicações Java em uso hoje.");
    }
}

let especializacao = 0;

while (especializacao != 1 && especializacao != 2) {
    especializacao = prompt("Você pensa em continuar se especializando na área escolhida ou quer se desenvolver para se tornar um Fullstack? Responda com o número 1 para continuar na área ou 2 para Fullstack.")
    if (especializacao != 1 && especializacao != 2){
        alert("Digite uma opção válida.");
    }
}

if (especializacao == 1) {
    alert("Muito bom!No curso do Alura você pode encontrar cursos incríveis para se especializar na sua área.")
}
else if(especializacao == 2) {
    alert("Legal!Existem alguns cursos bons para fazer que podem te ajudar na carreira de Fullstack.")
}


let tecnologia = 0;
    
while (tecnologia !== "Não" && tecnologia !== "não" && tecnologia !== "nao" && tecnologia !== "Nao") {
    tecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, qual?");
    if (tecnologia == "Python" || tecnologia == "python") {
        alert("O Python é bem inclusiva, pois por ser uma linguagem de sintaxe relativamente simples e de fácil compreensão, ganhou popularidade entre profissionais da indústria tecnológica que não são especificamente programadores.");
    }
    else if (tecnologia == "C++" || tecnologia == "c++") {
        alert("Muito legal!Ela é considerada a quarta linguagem de programação mais popular do mundo, segundo o  Índice Tiobe.");
    }
    else if (tecnologia == "Go" || tecnologia == "go") {
        alert("Uma curiosidade da linguagem é que em Go não existe o conceito de classes, nem herança, nem try/catch, sendo assim uma linguagem não indicada para desenvolvimento orientado a objetos.");
    }
    else if (tecnologia == "Typescript" || tecnologia == "typescript") {
        alert("O TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.");
    }
    else if (tecnologia == "PHP" || tecnologia == "php") {
        alert("O PHP é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.");
    }
    else if (tecnologia == "Ruby" || tecnologia == "ruby") {
        alert("Legal! A Ruby é considerada uma das mais simples dentro do universo da programação.");
    }
    else if (tecnologia == "C" || tecnologia == "c") {
        alert("Interessante! A linguagem C ainda é uma das mais populares do mercado de programação devido às diversas vantagens que apresenta. Por isso, é quase uma obrigatoriedade no currículo de uma pessoa que trabalha com desenvolvimento.");
    }
    else if (tecnologia !== "Não" && tecnologia !== "não" && tecnologia !== "nao" && tecnologia !== "Nao") {
        alert("Legal!Essa eu não conhecia.")
    }  
}
