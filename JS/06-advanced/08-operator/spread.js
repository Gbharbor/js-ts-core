// Uso do operador Spread em Arrays e Objetos
// O operador Spread ('...') permite combinar ou expandir elementos de arrays e propriedades de objetos.

// Exemplo de uso do Spread com Arrays
let numeros = [1, 2, 3, 4];
let outros = [...numeros, 5, 6, 7, 8]; // Expande os itens do array 'numeros' e adiciona novos valores
console.log(outros); // Resultado: [1, 2, 3, 4, 5, 6, 7, 8]

// Exemplo de uso do Spread com Objetos
let info = {
    nome: 'gui',
    sobrenome: 'porto',
    idade: 99
};
console.log("Objeto original:", info);

// Criando um novo objeto usando o Spread para reaproveitar 'info' e adicionar novos dados
let newInfo = {
    ...info, // Expande as propriedades de 'info' dentro do novo objeto
    cidade: 'Porto Alegre', // Novas propriedades adicionadas
    estado: 'RS',
    pais: 'BR'
};
console.log("Novo objeto com Spread:", newInfo); // Objeto atualizado com as novas propriedades

// Uso comum do Spread em funções para reutilizar dados
// Exemplo de função que adiciona novas informações ao objeto passado
function addInfo(info) {
    let newInformation = {
        ...info,            // Expande as propriedades de 'info'
        status: 0,          // Novas propriedades adicionadas
        token: '23123131',
        date_sign: '.....'
    };
    return newInformation; // Retorna o objeto atualizado
}
console.log(addInfo({ nome: 'Guix', sobrenome: 'Portox' })); // Exibe o objeto com os dados originais e novos