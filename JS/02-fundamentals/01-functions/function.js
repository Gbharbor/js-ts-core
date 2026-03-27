// Função básica que exibe o valor da gravidade
function gravidade() {
    console.log("A gravidade é 9.8");
}
gravidade();

// Operação matemática de soma (subtração, multiplicação e divisão também poderiam ser aplicadas)
function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log("Resultado: " + resultado);
}
somar(10, 10);

// Combinação de nome e sobrenome para exibir o nome completo - método 1
function inteironome(name, lastname) {
    let inteironome = `${name} ${lastname}`;
    console.log("Nome Completo: " + inteironome);
}
inteironome("Porto", "Gui");

// Combinação de nome e sobrenome - método 2
function nomecompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}
nomecompleto("Gui", "Porto");

// Combinação de nome e sobrenome com retorno - método 3
function completename(name, lastname) {
    return `${name} ${lastname}`;
}
let complete = completename("Gui", "Porto");
console.log("Nome: " + complete);

// Função com condição (se / senão) para verificar maioridade - método 1
function tobeofage(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
let age = tobeofage(12);
console.log(age);

// Verificação de maioridade com condição - método 2
function maiordeidade(idade) {
    return idade >= 18;
}
let anos = 19;
let validacao = maiordeidade(anos);
if (validacao) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Cálculo de porcentagem: y é equivalente a % de x
function calcpct(n1, n2) {
    return (n2 / n1) * 100;
}
let x = 100;
let y = 20;
let pct = calcpct(x, y);
console.log(`${y} é equivalente a ${pct}% de ${x}`);

// Cálculo do preço de uma propriedade com base no m2 e número de quartos
function calcproperty(meters, beds) {
    let m2 = 3000;
    let price = 0;
    switch (beds) {
        case 1:
        default:
            price = meters * m2;
            break;
        case 2:
            price = meters * (m2 * 1.2);
            break;
        case 3:
            price = meters * (m2 * 1.5);
            break;
    }
    return price;
}
let meters = 80;
let beds = 2;
let price = calcproperty(meters, beds);
console.log(`O preço é ${price}`);

// Função para validar usuário e senha; usuário correto: Gui; senha correta: 1234
function validation(user, pw) {
    return user === "Gui" && pw === 1234;
}
let usuario = "gai";
let senha = 1234;
let value = validation(usuario, senha);
if (value) {
    console.log(`Bem-vindo ${usuario}`);
} else {
    console.log("Senha incorreta");
}

// Funções Arrow para operações matemáticas
const sum = (x, y) => x + y;
console.log(sum(10, 30));

const lastname2 = (lastN) => "Nome " + lastN;
console.log(lastname2("Sobrenome"));

// Diferentes formas de incrementar variáveis dentro de funções
let count = 0;
function add() {
    count++;
}
add();
console.log(count);

let count1 = 0;
function add1() {
    count1 += 1;
}
add1(); add1();
console.log(count1);

// Função para calcular o quadrado de um número
function square(x) {
    return x * x;
}
console.log(square(2));

// Função para somar quadrados de dois números
function addsquares(a, b) {
    return square(a) + square(b);
}
console.log(addsquares(2, 3)); // 13

// Somar quadrados com uso de variáveis intermediárias
function addsquares(a, b) {
    let rootA = square(a);
    let rootB = square(b);
    return rootA + rootB;
}
console.log(addsquares(4, 4)); // 32

// Função de soma de quadrados, com função quadrado interna
function addsquares(a, b) {
    function square(x) {
        return x * x;
    }
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addsquares(5, 5)); // 50

// Função Arrow limpa com quadrado embutido
const addquadrado = (a, b) => {
    const square = x => x * x;
    return square(a) + square(b);
}
console.log(addquadrado(6, 6)); // 72

// Versão mais concisa de soma de quadrados
const additems = (a, b) => a * a + b * b;
console.log(additems(3, 3)); // 18