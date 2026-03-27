// Manipulação de strings
let nome = 'Gui Barreto Porto';

// Verifica a quantidade de caracteres na string
let resultado = nome.length;
console.log(resultado); // Exibe o comprimento da string

// Verifica se existe um texto específico na string
let resultado1 = nome.indexOf('Porto'); // Retorna a posição inicial de 'Porto' (10) ou -1 se não encontrado
console.log(resultado1);

// Exemplo de verificação dentro de uma condicional
let resultado2;
if (nome.indexOf('Silva') > -1) { // Retorna verdadeiro se 'Silva' for encontrado
    resultado2 = 'Achou';
} else {
    resultado2 = 'Não achou';
}

// Extrai parte da string com slice
let resultado3 = nome.slice(0, 10); // Extrai da posição 0 até 10 ('Gui Barreto')
console.log(resultado3);

// Substring - semelhante ao slice, mas não permite valores negativos
let resultado4 = nome.substring(0, 10); // Extrai da posição 0 até 10
console.log(resultado4);

// Substr - obsoleto, mas extrai a partir de uma posição específica e um comprimento
let resultado5 = nome.substr(3, 10); // Extrai da posição 3, 10 caracteres
console.log(resultado5);

// Substitui textos em uma string com replace
let resultado6 = nome.replace('Porto', 'Harbor'); // Substitui 'Porto' por 'Harbor'
console.log("resultado: ", resultado6);
console.log("nome: ", nome); // Nome original permanece inalterado

// Para alterar a string original:
nome = nome.replace("Gui", "Will");

// Converte a string para maiúsculas e minúsculas
let resultado7 = nome.toUpperCase(); // Maiúsculas
console.log(resultado7);

let resultado8 = nome.toLowerCase(); // Minúsculas
console.log(resultado8);

// Concatenação - concatenando strings com concat (pouco utilizado)
let resultado9 = nome.concat(' ', "Porto");
console.log(resultado9); 

// Alternativa mais simples para concatenar strings
let resultado10 = nome + ' Porto';
console.log(resultado10);

// Remover espaços em excesso no início e final da string com trim
let nome1 = "      gui     ";
let resultado11 = nome1.length; // Conta incluindo os espaços
let resultado12 = nome1.trim().length; // Remove espaços e conta caracteres

// Função charAt para obter um caractere em uma posição específica
let resultado13 = nome.charAt(3); // Obtém o caractere na posição 3
resultado13 = nome.substr(3, 1); // Alternativa usando substr

// Outra alternativa para obter um caractere na posição
let resultado14 = nome[2]; // Obtém o terceiro caractere
console.log(resultado13);

// Transforma a string em um array com split
let nome2 = "Guilherme Barreto Porto";
let resultado15 = nome.split(' '); // Divide a string em um array usando espaços como separador
console.log(resultado15);

// Includes - verifica se um caractere ou substring está presente
let nombre = 'Guilherme';
console.log(nombre.includes('a')); // Verifica se contém 'a' (diferencia maiúsculas e minúsculas)

// Repetir uma string com repeat
console.log('x'.repeat(20)); // Repete o caractere 'x' 20 vezes
console.log(nombre.repeat(5)); // Repete 'Guilherme' 5 vezes

// PadStart e PadEnd - preenche a string até um comprimento especificado
let telefone = '45';
console.log(telefone.padEnd(9, '*')); // Preenche com '*' até ter 9 caracteres

let telefone1 = '45';
console.log(telefone1.padStart(9, '*')); // Preenche com '*' no início

// Exemplo prático - mascarando um cartão de crédito
let cartao = '1234 1234 1234 1234';
console.log(`Esse é seu cartão? ${cartao}`); // Exibindo o cartão completo é inseguro

// Máscara para exibir apenas os últimos 4 dígitos
let card = '1234 5678 9012 3456';
let lastDigits = card.slice(-4); // Obtém os últimos 4 dígitos
let maskCard = lastDigits.padStart(16, '*'); // Preenche com '*' até 16 caracteres
console.log(`Esse é seu cartão? : ${maskCard}`);