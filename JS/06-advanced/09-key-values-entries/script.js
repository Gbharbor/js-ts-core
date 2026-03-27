// Arrays e Objetos no JavaScript
let lista = [1, 2, 3, 4];
console.log(typeof lista); // Exibe "object", pois arrays são um tipo especial de objeto em JavaScript.

// Métodos Object.keys, Object.values e Object.entries funcionam tanto para arrays quanto para objetos.

// Exemplo 1: Usando Object.keys, Object.values e Object.entries em Arrays
let lista1 = ['ovo', 'macarrao', 'feijao', 'pipoca'];

// Object.keys() - Retorna as chaves (índices) do array
console.log(Object.keys(lista1)); // Resultado: [ '0', '1', '2', '3' ]

// Object.values() - Retorna os valores do array
console.log(Object.values(lista1)); // Resultado: [ 'ovo', 'macarrao', 'feijao', 'pipoca' ]

// Object.entries() - Retorna cada elemento do array como pares [índice, valor]
console.log(Object.entries(lista1)); 
// Resultado: [ ['0', 'ovo'], ['1', 'macarrao'], ['2', 'feijao'], ['3', 'pipoca'] ]

// Exemplo 2: Usando Object.keys, Object.values e Object.entries em Objetos
let pessoa = {
    nome: 'gui',
    sobrenome: 'porto',
    idade: 90
};

// Object.keys() - Retorna as chaves do objeto
console.log(Object.keys(pessoa)); // Resultado: [ 'nome', 'sobrenome', 'idade' ]

// Object.values() - Retorna os valores do objeto
console.log(Object.values(pessoa)); // Resultado: [ 'gui', 'porto', 90 ]

// Object.entries() - Retorna as chaves e valores como pares
console.log(Object.entries(pessoa)); 
// Resultado: [ ['nome', 'gui'], ['sobrenome', 'porto'], ['idade', 90] ]