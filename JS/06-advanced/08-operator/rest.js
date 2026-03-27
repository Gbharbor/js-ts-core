// Operator Rest:
// O operador Rest permite que uma função receba um número variável de argumentos como um array.

// Exemplo de uso do operador Rest para números
function adicionar(...numeros) {
    console.log(numeros); // Exibe todos os argumentos passados como um array
}
adicionar(5, 6, 7, 8, 9, 10); // No console: [5, 6, 7, 8, 9, 10]
// Aqui, '...numeros' captura todos os argumentos e os armazena em um array chamado 'numeros'

// Exemplo de uso do operador Rest para strings (nomes)
function addNames(...names) {
    console.log(names); // Exibe todos os nomes passados como um array
}
let names = ['maria', 'joana'];
addNames(...names, 'Gui', 'ana', 'juu', 'bea'); // No console: ['maria', 'joana', 'Gui', 'ana', 'juu', 'bea']
// O operador Spread ('...') expande o array 'names' em argumentos individuais para 'addNames'

// Praticando os operadores Rest e Spread juntos
function addNomes(nomes, ...novosNomes) {
    // Aqui combinamos o array 'nomes' com os novos nomes passados via Rest
    let novoGrupo = [
        ...nomes,      // Usa o operador Spread para expandir os itens do array 'nomes'
        ...novosNomes  // Usa o operador Spread para expandir 'novosNomes' e adicionar ao grupo
    ];
    return novoGrupo; // Retorna o array combinado
}
let nomes = ['Dr.', 'Porto'];
let outros = addNomes(nomes, 'Dr. Maria', 'Dr. Rita');
console.log(outros); // No console: ['Dr.', 'Porto', 'Dr. Maria', 'Dr. Rita']
