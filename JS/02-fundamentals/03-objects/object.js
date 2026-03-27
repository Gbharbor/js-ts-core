// Definindo o objeto "character" com várias propriedades e métodos
let character = {
    name: "bia",
    lastname: "damelio",
    
    // Método para retornar o nome completo do personagem
    fullname: function () {
        return `${this.name} ${this.lastname}`;
    }, // Função anônima que usa "this" para acessar propriedades do próprio objeto "character"

    // Array de idades
    ages: [90, 100],

    // Método que retorna o número de idades no array "ages"
    allages: function () {
        return this.ages.length; // Retorna a quantidade de itens no array "ages"
    },

    // Array "eyes" contendo objetos que representam características dos olhos
    eyes: [
        { size: "big", color: "blue" },
        { size: "small", color: "green" },
    ], // Array de objetos com duas características dos olhos: "size" e "color"

    // Objeto "features" contendo um array "strength"
    features: {
        strength: [10, 20, 30] // Array com valores representando a força
    }
};

// Exibindo o nome completo usando o método "fullname"
console.log("Nome completo:", character.fullname()); // Deve incluir parênteses pois é uma função

// Exibindo a quantidade de idades usando o método "allages"
console.log("Número de idades:", character.allages()); // Retorna 2 pois há dois valores em "ages"

// Exibindo o nome e o array completo de idades
console.log(`Nome: ${character.name}, Idades: ${character.ages}`); // Exibe todas as idades contidas no array

// Exibindo a primeira idade no array "ages"
console.log("Primeira idade:", character.ages[0]); // Acessa o valor na posição 0, que é 90

// Exibindo o tamanho dos olhos (característica do segundo item do array "eyes")
console.log("Tamanho dos olhos:", character.eyes[1].size); // Acessa "size" do segundo objeto em "eyes"

// Adicionando novos valores ao array "strength" dentro do objeto "features"
character.features.strength.push(50); // Adiciona o valor 50 ao array "strength"
character.features.strength.push(60); // Adiciona o valor 60 ao array "strength"
character.features.strength[4] += 5;  // Incrementa o valor no índice 4 em 5, resultando em 65

// Exibindo o valor recentemente adicionado em "strength" na posição 3
console.log("Valor adicionado ao strength:", character.features.strength[3]); // Exibe 50

// Exibindo o valor modificado no índice 4 de "strength"
console.log("Valor adicionado e modificado:", character.features.strength[4]); // Exibe 65