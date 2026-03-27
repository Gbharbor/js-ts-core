// Desconstruindo um array em variáveis individuais
let info = ['gui porto', 'gui', 'porto', '@gbharbor'];

// O array é desconstruído automaticamente com base na ordem dos itens
let [nomeCompleto, nome, sobrenome, instagram] = info;
console.log(nomeCompleto, nome, sobrenome, instagram); // Exibe cada item individualmente

// Pulando valores ao desconstruir um array
let info2 = ['ana maria', 'ana', 'maria', '@anamaria'];
let [nomeCompleto1, , , instagram1] = info2; // Ignora 'nome' e 'sobrenome' usando vírgulas
console.log(nomeCompleto1, instagram1); // Exibe apenas 'nomeCompleto' e 'instagram'

// Definindo valores padrão na desconstrução
let [name, lastname, age = 90] = ['Juu', 'Pinto']; // 'age' assume o valor padrão 90 se não estiver no array
console.log(name, lastname, age); // Exibe 'Juu', 'Pinto', '90'

// Usando uma função para criar um array e desconstruí-lo
function criar() {
    let a = [1, 2, 3];
    return a;
}
let numeros = criar();
let [a, b, c] = numeros;
console.log(a, b, c); // Exibe os valores retornados pela função: 1, 2, 3

// Desconstrução limpa diretamente com o retorno da função
function create() {
    return [1, 2, 3];
}
let [x, y, z] = create(); // Desconstrói diretamente o array retornado pela função
console.log(`clean code: ${x}, ${y}, ${z}`); // Exibe: "clean code: 1, 2, 3"