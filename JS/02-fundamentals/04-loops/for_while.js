// Estrutura de loop "for" básica
for (let n = 0; n < 10; n++) {
    console.log("repetir " + n);
}
// No exemplo acima, o console.log está dentro do loop "for". Note que o loop começa em 0 e termina em 9, pois estamos contando até 10, mas começando do 0.

let items = ["item1", "item2", "item3"]; // Aqui, temos um array simples com 3 itens
items.push("item4"); // Adicionamos um novo item ao array, chamado "item4"

// Loop "for" para imprimir até 10 elementos, mas temos apenas 4, então os valores além disso serão "undefined"
for (let n = 0; n < 10; n++) { 
    console.log(items[n]);
} 

// Loop para exibir apenas até o terceiro item
for (let n = 0; n < 3; n++) {
    console.log(items[n]);
} 

// Exibindo o array com um loop "for" até o final dos elementos, usando "items.length" para parar no final do array
for (let n = 0; n < items.length; n++) {
    console.log(items[n]);
}

// Utilizando "for...in", uma forma mais limpa para iterar sobre índices de um array
for (let i in items) {
    console.log(items[i]);
}

let colors = [
    { name: "red", qt: "dez" },
    { name: "blue", qt: "vinte" }
];

// Usando "for...of" para exibir os objetos no array "colors"
for (let cor of colors) {
    console.log(`Nome: ${cor.name}, Quantidade: ${cor.qt}`);
}

// Convertendo os valores do array para letras maiúsculas usando "for...in"
for (let i in colors) {
    colors[i].name = colors[i].name.toUpperCase();
    colors[i].qt = colors[i].qt.toUpperCase();
    console.log(colors[i].qt);
    console.log(colors[i].name);
} 
/* Diferença entre "FOR..IN" e "FOR...OF":
O loop "for...in" é utilizado para iterar sobre propriedades de objetos, enquanto "for...of" é ideal para iterar sobre objetos iteráveis, como arrays. Para arrays, "for...of" é preferido pois oferece uma sintaxe mais simples e intuitiva.
*/

// Voltando os valores para minúsculas com um loop tradicional "for"
for (let n = 0; n < colors.length; n++) {
    colors[n].qt = colors[n].qt.toLowerCase();
    colors[n].name = colors[n].name.toLowerCase();
    console.log(`${colors[n].qt} ${colors[n].name}`);
}

// Usando "while" para exibir números de 1 a 50
let numero = 1; 
while (numero <= 50) {
    console.log(`número: ${numero}`);
    numero++;
}
// Exemplo de uso do "while". Loops "while" são mais flexíveis e podem ser usados quando não se sabe quantas vezes precisa iterar. O loop "for" é mais estruturado e geralmente usado quando se sabe exatamente o número de iterações necessárias.