// Usando Math em JavaScript para manipulação matemática

// Número PI - constante matemática
let new1 = Math.PI;
console.log("Valor de PI:", new1); // Exibe o valor de PI (~3.14159)

// Arredondamento de números

// Math.round() - arredonda para o inteiro mais próximo
let new2 = Math.round(3.53); 
console.log("Arredondado (Math.round):", new2); // 4

// Math.floor() - arredonda sempre para baixo, independente do decimal
let new3 = Math.floor(3.99);
console.log("Arredondado para baixo (Math.floor):", new3); // 3

// Math.ceil() - arredonda sempre para cima, independente do decimal
let new4 = Math.ceil(3.1);
console.log("Arredondado para cima (Math.ceil):", new4); // 4

// Math.abs() - retorna o valor absoluto, removendo o sinal negativo
let new5 = Math.abs(-9.34543);
console.log("Valor absoluto (Math.abs):", new5); // 9.34543

// Math.min() - retorna o menor valor entre os argumentos fornecidos
let new6 = Math.min(7, 100, 500, 3); 
console.log("Menor valor (Math.min):", new6); // 3

// Math.max() - retorna o maior valor entre os argumentos fornecidos
let new7 = Math.max(7, 100, 500, 3);
console.log("Maior valor (Math.max):", new7); // 500

// Math.random() - gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo)
let new8 = Math.random();
console.log("Número aleatório (Math.random):", new8); // Ex.: 0.678

// Gerando um número aleatório entre 0 e 100 arredondado para baixo
let new9 = Math.floor(Math.random() * 100); 
console.log("Número aleatório entre 0 e 100 arredondado para baixo:", new9); // Ex.: 42

// Funções trigonométricas - valores em radianos
let new10 = Math.sin(1); // Seno do ângulo em radianos
console.log("Seno (Math.sin):", new10); // Ex.: 0.841

let new11 = Math.cos(1); // Cosseno do ângulo em radianos
console.log("Cosseno (Math.cos):", new11); // Ex.: 0.540

let new12 = Math.tan(1); // Tangente do ângulo em radianos
console.log("Tangente (Math.tan):", new12); // Ex.: 1.557