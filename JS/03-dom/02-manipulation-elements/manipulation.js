//          |MANIPULAÇÃO DE ELEMENTOS I e II|

// Para manipular um elemento, primeiro o selecionamos e depois aplicamos as alterações. Aqui, escolhemos a div "#teste0".
function clicou0() { // Lembre-se de que estou usando a função onclick no HTML.
    const teste0 = document.querySelector("#teste0");
    console.log(teste0); // Exibe a div "teste" completa.
    console.log(teste0.children); // Exibe um array dos filhos imediatos da div, como "ul" e "h6".
    console.log(teste0.children[1].children); // Exibe os filhos do segundo elemento filho, "ul", que são os "li".
    
    const ul = teste0.querySelector("ul"); // Seleciona o primeiro "ul" dentro de "teste0".
    ul.children[1].innerHTML = "item <strong>alterado</strong>"; // Modifica o texto do segundo "li" dentro do "ul" e lê como HTML.
    ul.children[0].innerText = "item <strong>alterado</strong>"; // Modifica o primeiro "li", mas lê o texto literalmente.
    ul.children[2].append(" alterado"); // Adiciona texto no terceiro "li" sem alterar o conteúdo original.
    console.log(ul.outerHTML); // Exibe o HTML completo do "ul".
    console.log(ul.innerHTML); // Exibe apenas os "li" dentro do "ul".
};

// Criando função de clique diretamente no evento
let botao1 = document.querySelector(".botao1");
botao1.addEventListener("click", function clicou1() {
    console.log("clicou botao1");
    const teste1 = document.querySelector("#teste1");
    const ul = teste1.querySelector("ul");
    ul.innerHTML = "<li>item alterado</li>"; // Altera o conteúdo do primeiro "li".
    ul.innerHTML += "<li>item adicionado</li>"; // Adiciona outro "li" ao final.
});

// Usando a função diretamente no evento
let botao2 = document.querySelector(".botao2");
botao2.addEventListener("click", function clicou2() {
    console.log("clicou botao2");
    const teste2 = document.querySelector("#teste2");
    const ul = teste2.querySelector("ul");
    ul.outerHTML = "Elemento completamente alterado"; // Substitui o "ul" inteiro.
});

let botao3 = document.querySelector("#botao3");
botao3.addEventListener("click", function clicou3() {
    console.log("clicou botao3");
    const teste3 = document.querySelector("#teste3");
    const ul = teste3.querySelector("ul");
    let newli = document.createElement("li"); // Cria um novo elemento "li".
    newli.innerText = "li adicionado por innerText";
    ul.appendChild(newli); // Anexa o novo "li" ao "ul".
});

//          |MANIPULAÇÃO DE ELEMENTOS III|
let botao4 = document.querySelector("#botao4");
botao4.addEventListener("click", function clicou4() {
    console.log("clicou botao4");
    const teste4 = document.querySelector("#teste4");
    const ul = teste4.querySelector("ul");
    let newul = document.createElement("ul");
    newul.innerHTML = "ul adicionado por innerHTML";
    ul.prepend(newul); // Insere um novo "ul" antes dos valores existentes.
    ul.before("texto antes"); // Insere texto antes do "ul".
    ul.after("texto depois"); // Insere texto depois do "ul".
});

let botao5 = document.querySelector(".botao5");
botao5.addEventListener("click", function clicou5() {
    console.log("clicou botao5");
    const teste5 = document.querySelector("#teste5");
    let firstul = document.createElement("ul");
    firstul.innerHTML = "<li>LI criado por DOM</li>";
    teste5.append(firstul);

    let newUL = document.createElement("ul");
    for (let i = 0; i < 5; i++) { // Cria 5 itens "li" em um loop
        let newLI = document.createElement("li");
        newLI.innerHTML = "item adicionado " + (i + 1); // Começa a contagem do loop a partir de 1.
        newUL.append(newLI);
    }
    teste5.after(newUL);
    const newbutton = document.createElement("button");
    newbutton.innerHTML = "botao criado";
    teste5.before(newbutton);
});

/*      |MANIPULAÇÃO DE ATRIBUTOS e ESTILO| */

function clicou6() {
    const input = document.querySelector("input"); // Seleciona o primeiro elemento input encontrado.
    const botao = document.querySelector(".botao6");

    if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password"); // Alterna entre exibir o texto ou ocultar como senha.
        botao.innerHTML = "Mostrar Senha";
    } else {
        input.setAttribute("type", "text");
        botao.innerHTML = "Ocultar Senha";
    }
}

function clicou7() {
    const input = document.querySelector(".input1");
    console.log(input.getAttribute("placeholder"));
    if (input.hasAttribute("placeholder")) {
        console.log("tem placeholder");
    } else {
        console.log("não tem placeholder");
    }
    input.setAttribute("placeholder", "não clique aqui");
}

function clicou8() {
    const teste6 = document.querySelector("#teste6");
    const firstLI = teste6.querySelector("li:first-child");
    console.log(firstLI);
    firstLI.style.backgroundColor = "#00F"; // Altera o estilo do primeiro "li" para azul.
    firstLI.style.fontSize = "25px";
    firstLI.style.color = "green";

    const button = document.querySelector(".botao8");
    console.log(button);
    console.log(button.classList); // Verifica as classes do elemento usando classList.

    // Alterna entre classes diferentes para o botão
    if (button.classList.contains("newclass0")) {
        button.classList.replace("newclass0", "newclass1");
    } else {
        button.classList.replace("newclass1", "newclass0");
    }
}

/* Alternativa mais simples para alternar classes usando toggle.

button.classList.toggle("newclass0");
if (button.classList.contains("newclass0")) {
    button.classList.remove("newclass0");
    button.classList.add("newclass1");
} else {
    button.classList.remove("newclass1");
    button.classList.add("newclass0");
}
*/