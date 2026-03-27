// Definindo um array de nomes com sobrenomes aninhados
let names = ["gui", "ana", "jhon", ["porto", "barreto"]];
console.log(names[3][0]); // Aqui estou acessando o valor que são os sobrenomes e escolhendo o índice zero, que é "porto"

names.sort(); // Ordena em ordem alfabética
names[3].sort(); // Ordena alfabeticamente os sobrenomes (posição 3)
names.reverse(); // Inverte a ordem de A a Z para Z a A
names[0].reverse(); // Inverte de Z a A o primeiro nome
console.log(names); // Exibe o array de nomes

// Exemplo de array misto com diferentes tipos de dados
let mixed = ["azul", [18, 20, 30], true, names]; // String, array, booleano e o array names
console.log(mixed[3][0]); // Acessa o array names e o primeiro valor ("gui")
let age = mixed[1]; // Cria uma variável que referencia um array interno do array mixed, no caso [18, 20, 30]
console.log(age[2]); // Exibe o terceiro valor do array age, ou seja, 30

// Exemplo com ingredientes onde alguns valores são definidos fora da ordem
let ingredients = ["ovo", "farinha", "sal"];
ingredients[4] = "cebola"; // Define o valor na posição 4, deixando a posição 3 vazia
ingredients[3] = "fermento"; // Agora define o valor 3, eliminando o vazio
ingredients[4] = "manteiga"; // Sobrescreve o valor "cebola" na posição 4
ingredients.push("açúcar"); // Adiciona "açúcar" ao final do array
ingredients[ingredients.length - 1] = "tomate"; // Substitui o último valor diretamente
console.log(ingredients.join("->")); // Usando join, cria uma seta entre os valores do array
console.log(`Total: ${ingredients.length}`); // Exibe a quantidade total de itens no array

// Array vazio e manipulação de elementos
let emptyarray = []; // Cria um array vazio
emptyarray.push("string aleatória"); // Adiciona uma string
emptyarray.push("string principal"); // Adiciona outra string
emptyarray.push(26); // Adiciona um número
emptyarray.pop(); // Remove o último valor (26)
emptyarray.shift(); // Remove o primeiro valor ("string aleatória")
console.log(emptyarray); // Exibe apenas "string principal"

// Array de objetos com comparação de propriedade 'ano' usando .sort()
let cars = [
    { marca: "fiat", ano: 2022 },
    { marca: "bmw", ano: 2018 },
    { marca: "audi", ano: 2020 }
];
// Ordena o array de objetos com base no ano de fabricação
cars.sort((a, b) => {
    if (a.ano > b.ano) {
        return 1;
    } else if (a.ano < b.ano) {
        return -1;
    } else {
        return 0;
    }
});
console.log(cars); /* A função de comparação no sort() classifica os carros com base nos anos:
- Retorna 1 se o ano de `a` for maior que o de `b`, então `a` vem depois de `b`.
- Retorna -1 se o ano de `a` for menor, então `a` vem antes de `b`.
- Retorna 0 se ambos os anos forem iguais, mantendo a ordem entre eles. */

let skills = [
    { nome: "ruby", horas: 100 },
    { nome: "js", horas: 120 }
];
skills.sort((a, b) => b.horas - a.horas); // Ordena do maior para o menor número de horas
console.log(skills); // Exibe "js" primeiro, pois tem mais horas (120)

// Similar ao exemplo anterior, porém mais simplificado
let option = [
    { nome: "java", horas: 40 },
    { nome: "c#", horas: 70 }
];
option.sort((a, b) => b.horas - a.horas);
console.log(option); // "c#" ficará no topo pois possui mais horas

// Uso do .filter() para filtrar elementos com mais de 4 letras
let fruits = ["banana", "laranja", "maçã", "pera"];
let bigfruits = fruits.filter((value) => value.length > 4);
console.log(bigfruits); // Exibe apenas frutas com mais de 4 letras

// Similar ao exemplo anterior, mas com código mais enxuto
let office = ["papel", "scanner", "teclado", "celular"];
let all = office.filter((item) => item.length > 4);
console.log(all); // Exibe itens com mais de 4 letras

// .every() verifica se todos os elementos têm mais de 3 letras
let meal = ["café", "almoço", "jantar", "lanche"];
let food = meal.every((value) => value.length > 3);
console.log(food); // Retorna true se todos os itens tiverem mais de 3 letras

// Mesmo exemplo de every(), mas com console log definido para true ou false
let feed = ["café", "almoço", "jantar", "lanche"];
let eat = feed.every((value) => value.length > 5);
if (eat) {
    console.log("Todos são maiores que 5 letras");
} else {
    console.log("Nem todos são maiores que 5 letras");
}

// .some() verifica se pelo menos um item tem mais de 6 letras
let stuffs = ["arroz", "feijão", "carne", "pão"];
let recipe = stuffs.some((value) => value.length > 6);
if (recipe) {
    console.log("Algum item tem mais de 6 letras");
} else {
    console.log("Nenhum item tem mais de 6 letras");
}
console.log(recipe); // Retorna true se algum item tiver mais de 6 letras

// .includes() verifica se "uva" já está presente no array
if (stuffs.includes("uva")) {
    console.log("Você já tem este item na lista");
} else {
    console.log("Você não tem este item na lista");
}