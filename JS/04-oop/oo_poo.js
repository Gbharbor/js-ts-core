// Definindo a classe Person0
class Person0 {
    // Construtor da classe que define as propriedades de uma pessoa
    constructor(name, age) {
        // Atribui o nome e a idade recebidos ao objeto
        this.name = name;
        this.age = age;
    }
}
// Criando duas pessoas usando a classe Person0
let p1 = new Person0("Joao", 20);
let p2 = new Person0("Maria", 30);
console.log("Idade de p1: ", p1.age);
console.log("Nome de p2: ", p2.name);

// Definindo a classe Person1 com uma idade padrão
class Person1 {
    // Inicializando a propriedade idade com o valor padrão 0
    age = 0;
    constructor(name) {
        this.name = name;
    }
}
let pe1 = new Person1("Ana");
let pe2 = new Person1("Gui");
// Modificando a idade da primeira pessoa
pe1.age = 20;
console.log(`${pe1.name} tem ${pe1.age} anos.`);
console.log(`${pe2.name} tem ${pe2.age} anos.`);

// Definindo a classe Person2 com métodos
class Person2 {
    age = 0;
    steps = 0;
    constructor(name) {
        this.name = name;
    }
    // Método para incrementar os passos
    takeAStep() {
        this.steps++; 
    }
    // Método para definir a idade, validando se o valor é um número
    setAge(newAge) {
        if (typeof newAge === "number") {
            this.age = newAge;
        } else {
            console.log("A idade deve ser um número!");
        }
    }
}
let per1 = new Person2("Joao");
let per2 = new Person2("Maria");
// Incrementando passos e definindo a idade
per1.takeAStep();
per1.takeAStep();
per1.takeAStep();
console.log(`Passos de ${per1.name}: ${per1.steps}`);
per1.setAge(98);
console.log(`${per1.name} tem ${per1.age} anos.`);
per2.setAge("oi");
console.log(`${per2.name} tem ${per2.age} anos`);

// Definindo a classe Person3 com getter e setter
class Person3 {
    _age = 50; // Usando _ para indicar uma variável "privada"
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Getter para a idade
    get age() {
        return this._age;
    }   
    // Setter para a idade com validação
    set age(x) {
        if (typeof x == "number") {
            this._age = x;
        }
    }
    // Getter para o nome completo
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let pers1 = new Person3("Joao", "Silva");
let pers2 = new Person3("Maria");
// Modificando a idade e acessando o nome completo
pers1.age = 12;
console.log(`${pers1.fullName} tem ${pers1.age} anos.`);

// Definindo a classe Person4 com métodos
class Person4 {
    age = 0;
    constructor(name) {
        this.name = name;
    }
    // Método para dizer "Oi"
    sayHi() {
        console.log(`${this.name} diz Oi`);
    }
    // Método para dar boas-vindas
    sayWC() {
        console.log(`Bem-vindo(a) ${this.name}`);
    }
}
// Definindo a classe Student que estende Person4
class Student extends Person4 {
    constructor(name, id) { 
        super(name); 
        this.id = id;
    }
    // Sobrescrevendo o método sayHi
    sayHi() {
        console.log(`${this.name} é um(a) estudante.`);
    }
    // Sobrescrevendo o método sayWC com super
    sayWC() {
        super.sayWC();
        console.log(`Bem-vindo(a), ${this.name}`);
    }
}
let perso1 = new Student("Gui Porto", 1);
perso1.age = 25;
perso1.sayHi();
perso1.sayWC();
console.log(`${perso1.name} tem ${perso1.age} anos e ID: ${perso1.id}`);

// Definindo a classe Person5 com propriedade e método estáticos
class Person5 {
    static hands = 2; // Propriedade estática para as mãos
    age = 0;
    constructor(name) {
        this.name = name;
    }
    // Método de instância
    sayHello() {
        console.log(`${this.name} disse Olá e tem ${Person5.hands} mãos.`);
    }
    // Método estático
    static sayHola(name) { 
        console.log(`Hola ${name}`);
    }
}
Person5.hands = 6;
let pessoa1 = new Person5("Porto");
pessoa1.sayHello();
console.log(`${pessoa1.name} tem ${Person5.hands} mãos`);
Person5.sayHola(pessoa1.name);

// Usando a classe Person6 e uma função para criar instâncias
class Person6 {
    age = 0;
    constructor(name) {
        this.name = name;
    }
}
// Função para criar uma instância de pessoa
function createPerson(name, age) {
    let person = new Person6(name);
    person.age = age;
    return person;
}
let person = createPerson("Gui", 83);
console.log(`${person.name} tem ${person.age} anos.`);