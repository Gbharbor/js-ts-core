// Principais métodos para manipulação de números em JavaScript
let n = 10;

// toString() - converte o número para string
let res = n.toString(); 
// No console, um número exibido como string aparece em preto, diferenciando-se de números puros.
console.log(res);

// toFixed() - formata o número com uma quantidade específica de casas decimais
let m = 10.123213123;
let res1 = "R$" + m.toFixed(2); // Exibe o número com 2 casas decimais, resultando em "10.12"
console.log(res1);

// parseInt() - converte uma string para um número inteiro
let x = '25';
let res2 = x + 5; // Como x é uma string, o operador + concatena, resultando em "255"
console.log(res2);

let res3 = parseInt(x) + 5; // parseInt converte x para número, resultando em 30
console.log(res3);

// parseFloat() - converte uma string para número de ponto flutuante (preserva decimais)
let y = '35.8';
let res4 = parseFloat(y) + 5; // parseFloat preserva o decimal, resultando em 40.8
console.log(res4);