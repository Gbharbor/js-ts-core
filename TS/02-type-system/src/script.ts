export {};

// -------------------------------------------------------
// Tipos Primitivos no TypeScript
// -------------------------------------------------------

// Tipo `string`
let nome1: string = "gui"; // Declaração explícita de que `nome` é uma string

// Tipo `number`
let idade: number = 90; // `idade` deve conter apenas valores numéricos

// Tipo `boolean`
let programador: boolean = true; // `programador` é um valor booleano (true/false)

// -------------------------------------------------------
// Tipagem em Arrays
// -------------------------------------------------------

// Array contendo apenas strings
let nomes: string[] = ["ana", "gui", "bia"];
nomes.push("carlos"); // OK: Adicionando uma string
// nomes.push(123); // ERRO: `123` não é uma string

// Array contendo apenas números
let numbers: number[] = [10, 20, 30];
numbers.push(40); // OK: Adicionando um número
// numbers.push("quarenta"); // ERRO: Apenas números são permitidos

// Outra forma de tipar arrays: `Array<Type>`
let numeros: Array<number> = [20, 30, 40];
numeros.push(50); // OK: Adicionando um número

// -------------------------------------------------------
// Tipo `any` (Aceita qualquer tipo)
// -------------------------------------------------------

// Array com `any` permite qualquer tipo de valor
let coisas: any[] = ["ana", "gui", "bia"];
coisas.push(213); // OK: Adicionando um número
coisas.push(true); // OK: Adicionando um booleano

// Atenção: Usar `any` reduz a segurança do código e deve ser evitado quando possível.

// -------------------------------------------------------
// Tipagem nos Parâmetros de Funções
// -------------------------------------------------------

function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}

// Usando a função
console.log(firstLetterUpperCase("gui")); // Gui

// -------------------------------------------------------
// Tipagem no Retorno de Funções
// -------------------------------------------------------

function somar1(n1: number, n2: number): number {
    return n1 + n2;
}

// Usando a função
let resultado = somar1(2, 3);
console.log("Resultado da soma:", resultado); // 5

// -------------------------------------------------------
// Contextual Typing (Tipagem Contextual)
// -------------------------------------------------------

let names4 = ["ana", "gui", "bia"];

names4.forEach(function (nom) {
    console.log(nom.toUpperCase());
});