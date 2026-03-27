// Em JavaScript, uma função funcional é uma função que pode ser passada como argumento para outras funções, 
// retornada por outras funções ou atribuída a variáveis. Em outras palavras, uma função funcional é tratada 
// como um valor de primeira classe, assim como strings, números ou objetos. Isso permite que as funções 
// sejam usadas de forma flexível em JavaScript, facilitando a implementação de técnicas como programação 
// funcional e callbacks. Funções funcionais são essenciais para lidar com eventos assíncronos, manipulação 
// de arrays e objetos, e muitas outras tarefas comuns na programação JavaScript moderna.

// Criando um objeto de pessoa diretamente para exibir as propriedades
let person = {
    nome: "gui",
    sobrenome: "porto",
    idade: 90
}

// Criar objetos dessa forma pode ser trabalhosa. Utilizando programação funcional, podemos criar uma 
// "fábrica" (factory) para retornar um objeto de forma simplificada.
// Função factory para criação de pessoas
function createPerson(name, lastname, age) {
    return {
        name,
        lastname,
        age,
        getFullname() {
            return `${this.name} ${this.lastname}`;
        },
        start() {
            console.log("Iniciou a pessoa");
        }
    }
}

// Criando instâncias de pessoa com a função factory
let person1 = createPerson("gui", "porto", 20);
let person2 = createPerson("laura", "porto", 30);
console.log(person1.name);            // Exibe o nome de person1
console.log(person2.getFullname());   // Exibe o nome completo de person2
person1.start();                      // Inicia o person1 (exibe a mensagem)

// Função construtora funcional
// Em uma função funcional, não há um construtor como nas classes. Em vez disso, podemos adicionar uma função 
// para realizar alguma ação específica durante a criação do objeto. 
// A função start() será chamada como exemplo de "construtor" funcional, executando uma ação ao iniciar a pessoa.

// Herança funcional
// Podemos definir um modelo base de um objeto e usá-lo para criar variantes mais específicas.
// Exemplo de um usuário padrão para herança funcional
const defaultUser = {
    name: "",
    email: "",
    level: 1
}

// Criando um usuário comum, herdando as propriedades padrão
let user1 = {
    ...defaultUser, // Copia todas as propriedades de defaultUser
    name: "guilhermao",
    email: "guiportopt@outlook.com" // Sobrescreve ou adiciona novas propriedades
}
console.log(user1); // Exibe user1 com o nome e email específicos e level herdado

// Criando um administrador com nível de permissão diferente
let adm1 = {
    ...defaultUser,
    name: "admbrabo",
    email: "admbrabo@gmail.com",
    level: 2 // Sobrescreve o nível de permissão padrão
}
console.log(adm1); // Exibe adm1 com nível 2, herdando o restante do defaultUser