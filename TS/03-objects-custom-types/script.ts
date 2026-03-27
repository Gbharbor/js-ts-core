// -------------------------------------------------------
// Exemplo de Types em Objetos e Propriedades Opcionais
// -------------------------------------------------------

function resumo(usuario: { nome: string; idade?: number }) {
    // "idade?" indica que a propriedade é opcional
    if (usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, você tem ${usuario.idade} anos.`;
    } else {
        return `Olá ${usuario.nome}.`;
    }
}

// Implementação da função com diferentes objetos
let u = { nome: "Gui", idade: 90 };
console.log(resumo(u)); // Saída: Olá Gui, você tem 90 anos.
console.log(resumo({ nome: "Ana" })); // Saída: Olá Ana.

// -------------------------------------------------------
// Union Types (Múltiplos Tipos)
// -------------------------------------------------------

let idade1: string | number = 90;

function mostrarIdade(idade: string | number) {
    if (typeof idade === "string") {
        console.log(idade.toUpperCase()); // Se for string, converte para maiúsculas
    } else {
        console.log(idade); // Se for número, apenas exibe
    }
}

mostrarIdade(90);        // Saída: 90
mostrarIdade("noventa"); // Saída: NOVENTA

// -------------------------------------------------------
// Types Customizados
// -------------------------------------------------------

type Idade = string | number;

let idade2: Idade = 90;

function mostrarIdadeCustomizada(i: Idade) {
    console.log(i); // Exibe a idade, seja string ou número
}

mostrarIdadeCustomizada(idade2);         // Saída: 90
mostrarIdadeCustomizada("noventa");      // Saída: noventa

// -------------------------------------------------------
// Objetos Complexos com Type
// -------------------------------------------------------

type User = {
    nome: string;
    idade: number;
};

function resumoUsuario(usuario: User) {
    return `Olá ${usuario.nome}, idade: ${usuario.idade}`;
}

console.log(resumoUsuario({ nome: "Gui", idade: 90 })); // Saída: Olá Gui, idade: 90

// -------------------------------------------------------
// Usando Interface (Alternativa ao Type)
// -------------------------------------------------------

interface UserInterface {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
}

function resumoComInterface(usuario: UserInterface) {
    return `Olá ${usuario.nome}, idade: ${usuario.idade}, email: ${usuario.email ?? "não informado"}`;
}

console.log(
    resumoComInterface({ nome: "Gui", idade: 90, email: "gui@example.com" })
); // Saída: Olá Gui, idade: 90, email: gui@example.com

// -------------------------------------------------------
// Type Assertions
// -------------------------------------------------------

let idadeField = document.getElementById("idade") as HTMLInputElement;
console.log(idadeField.value); // Acessa o valor do input de forma segura

// -------------------------------------------------------
// Tipos Literais
// -------------------------------------------------------

function mostrarTexto(texto: string, alinhamento: "left" | "right" | "center") {
    return `<div style="text-align: ${alinhamento}">${texto}</div>`;
}

console.log(mostrarTexto("Gui", "left"));   // Alinha à esquerda
console.log(mostrarTexto("Gui", "center")); // Alinha ao centro

// -------------------------------------------------------
// Combinação de Objetos e Valores Literais
// -------------------------------------------------------

type Opcoes = { width: number; height: number };

function configurar(props: Opcoes | "auto") {
    console.log(props);
}

configurar({ width: 100, height: 200 }); // OK
configurar("auto");                     // OK
// configurar("automatico");            // ERRO: Valor não permitido

// -------------------------------------------------------
// Boolean Literal Types
// -------------------------------------------------------

type VerdadeiroOuFalso = true | false;

function temNome(nome: string): VerdadeiroOuFalso {
    return nome !== ""; // Retorna true se o nome não for vazio
}

console.log(temNome("Gui")); // true
console.log(temNome(""));    // false

// -------------------------------------------------------
// Inferência Literal e Restrições com Tipos
// -------------------------------------------------------

function fazerRequisicao(url: string, method: "GET" | "POST") {
    console.log(`Requisição para ${url} com método ${method}`);
}

type Methods = "GET" | "POST";

let url = "https://google.com.br";
let method: Methods = "GET";

fazerRequisicao(url, method); // OK

type RequestDetails = {
    url: string;
    method: "GET" | "POST";
};

let req: RequestDetails = {
    url: "https://google.com.br",
    method: "GET",
};

fazerRequisicao(req.url, req.method); // OK

// req.method = "blabla"; // ERRO: "blabla" não é permitido

// -------------------------------------------------------
// Tipos para Funções Matemáticas
// -------------------------------------------------------

type MathFunction = (n1: number, n2: number) => number;

const soma: MathFunction = (n1, n2) => n1 + n2;
const subtrair: MathFunction = (n1, n2) => n1 - n2;
const multiplicar: MathFunction = (n1, n2) => n1 * n2;
const dividir: MathFunction = (n1, n2) => n1 / n2;

// const erroDividir: MathFunction = (n1, n2) => {
//     console.log("Sem retorno"); // ERRO: MathFunction exige retorno do tipo number
// };

// -------------------------------------------------------
// Funções com Retorno Void
// -------------------------------------------------------

function removerElemento(el: HTMLElement | null): void {
    if (!el) {
        console.warn("Elemento inválido ou inexistente.");
        return;
    }

    el.remove();
    console.log("Elemento removido com sucesso.");
}

removerElemento(document.getElementById("teste")); // Chama a função de forma segura