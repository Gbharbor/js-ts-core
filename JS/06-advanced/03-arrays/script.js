// Transformação de array em string
let lista = ["ovo", "farinha", "corante", "massa"];
let res = lista.toString(); // Converte o array em uma string com os itens separados por vírgulas
console.log(res); // "ovo,farinha,corante,massa"

// join() - une os elementos do array em uma string com um separador personalizado
let res1 = lista.join('-'); // Junta os itens com '-' entre eles
console.log(res1); // "ovo-farinha-corante-massa"

// indexOf() - encontra a posição de um item no array
let res2 = lista.indexOf('corante'); // Retorna a posição de 'corante' (2), ou -1 se não encontrado
console.log(res2);

// Modificando o array com métodos de adição e remoção
lista.shift();  // Remove o primeiro item ("ovo")
lista.pop();    // Remove o último item ("massa")
lista.push('prato'); // Adiciona "prato" ao final do array
lista[0] = 'ovos';   // Altera o primeiro item para "ovos"
lista[lista.length] = 'liquidificador'; // Adiciona "liquidificador" no final do array
console.log(lista); // ["ovos", "corante", "prato", "liquidificador"]

// Removendo itens com delete (deixa "undefined" no lugar)
delete lista[1];
console.log(lista); // ["ovos", undefined, "prato", "liquidificador"]

// splice() - remove um item em uma posição específica (recomendado)
lista.splice(1, 1); // Remove 1 item na posição 1
console.log(lista); // ["ovos", "prato", "liquidificador"]

// Concatenar arrays
let lista1 = ["ovo", "farinha", "corante", "massa"];
let lista2 = ["prato", "garfo", "faca", "colher"];
let resconcat = lista1.concat(lista2); // Junta os dois arrays em um só
console.log(resconcat); // ["ovo", "farinha", "corante", "massa", "prato", "garfo", "faca", "colher"]

// Ordenar arrays
lista1.sort(); // Ordena os itens em ordem alfabética
console.log(lista1); // ["corante", "farinha", "massa", "ovo"]

// reverse() inverte a ordem dos itens
lista2.sort().reverse(); // Ordena e inverte a ordem
console.log(lista2); // ["prato", "garfo", "faca", "colher"]

// Métodos avançados
// map() - dobra o valor de cada item
let list = [45, 4, 9, 16, 25];
let list1 = list.map(item => item * 2); // Multiplica cada item por 2
console.log(list1); // [90, 8, 18, 32, 50]

// Usando for...in para modificar cada item do array
let list2 = [45, 4, 9, 16, 25];
let list3 = [];
for (let i in list2) {
    list3.push(list2[i] * 2); // Multiplica cada item por 2
}
console.log(list3); // [90, 8, 18, 32, 50]

// filter() - retorna os itens que atendem a uma condição
let linha = [45, 4, 9, 16, 25];
let linha1 = linha.filter(item => item < 20); // Filtra os itens menores que 20
console.log(linha1); // [4, 9, 16]

// every() - verifica se todos os itens atendem a uma condição
let linha2 = [45, 4, 9, 16, 25];
let allAbove20 = linha2.every(item => item > 20); // Retorna false se algum item for menor ou igual a 20
console.log(allAbove20); // false

// some() - verifica se pelo menos um item atende a uma condição
let linha4 = [45, 4, 9, 16, 25];
let anyAbove20 = linha4.some(item => item > 20); // Retorna true se algum item for maior que 20
console.log(anyAbove20); // true

// find() - encontra o primeiro item que atende a uma condição
let lane = [45, 4, 9, 16, 25];
let foundItem = lane.find(item => item == 16); // Retorna o primeiro item igual a 16
console.log(foundItem); // 16

// findIndex() - retorna a posição do primeiro item que atende a uma condição
let foundIndex = lane.findIndex(item => item == 16); // Retorna a posição de 16
console.log(foundIndex); // 3

// Encontrar um objeto específico em um array de objetos
let users = [
    { id: 1, nome: 'gui', sobrenome: 'porto' },
    { id: 2, nome: 'ana', sobrenome: 'rita' },
    { id: 3, nome: 'juu', sobrenome: 'Cas' }
];
let person = users.find(user => user.sobrenome == 'porto'); // Retorna o objeto onde sobrenome é "porto"
console.log(person); // { id: 1, nome: 'gui', sobrenome: 'porto' }

// includes() - verifica se o item está presente no array
let lista3 = ['ovo', 'cafe', 'carne'];
console.log(lista3.includes('ovo')); // true se "ovo" estiver no array

// includes() também pode ser usado em strings
let frase = "Aprendendo JavaScript";
console.log(frase.includes("JavaScript")); // true se a substring "JavaScript" estiver presente