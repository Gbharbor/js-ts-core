// Selecionando elementos HTML: temos apenas um "input" e uma "ul" criados, então podemos selecioná-los desta forma.
const input = document.querySelector("input"); 
const list = document.querySelector("ul");

// Definindo a função para lidar com o evento "keyup"
function handleKeyUp(event) {
    // Verificando se a tecla pressionada é "Enter"
    if (event.key === "Enter") {
        console.log("Tecla Enter pressionada"); // Teste no console
        const typedText = input.value; // Captura o texto digitado
        console.log("Texto digitado: ", typedText);

        // Criando um novo item de lista (li)
        const newItemList = document.createElement("li");
        newItemList.textContent = input.value; // Define o conteúdo do novo "li" com o texto digitado
        // Adicionando o novo item à lista
        list.appendChild(newItemList);
        // Limpando o campo de entrada
        input.value = "";
    }
}

// Adicionando um ouvinte de evento para capturar quando uma tecla é pressionada
input.addEventListener("keyup", handleKeyUp);