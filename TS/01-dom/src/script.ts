export {};

// -------------------------------------------------------
// Lidando com Tipos em Operações Matemáticas (TypeScript)
// -------------------------------------------------------

// ⚠️ IMPORTANTE:
// getElementById pode retornar null!
// Por isso usamos `| null` e depois validamos antes de usar.

const numero1 = document.getElementById("numero1") as HTMLInputElement | null;
const numero2 = document.getElementById("numero2") as HTMLInputElement | null;
const botao = document.getElementById("calcular") as HTMLButtonElement | null;
const res = document.getElementById("resultado") as HTMLElement | null;

// -------------------------------------------------------
// Função tipada corretamente
// -------------------------------------------------------

// Aqui garantimos que só números entram e sai um número
function calcular(n1: number, n2: number): number {
  return n1 + n2;
}

// -------------------------------------------------------
// Evento de clique (com verificação de segurança)
// -------------------------------------------------------

// Só executa se TODOS os elementos existirem no HTML
if (numero1 && numero2 && botao && res) {
  botao.addEventListener("click", function () {
    // ⚠️ PROBLEMA COMUM:
    // input.value SEMPRE retorna string
    // então precisamos converter para number

    // ✔️ Forma correta:
    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);

    const resultado = calcular(valor1, valor2);

    // ✔️ Melhor usar textContent para texto simples
    res.textContent = resultado.toString();
  });
} else {
  console.error("Elementos HTML não encontrados.");
}

// -------------------------------------------------------
// Problema clássico de tipos
// -------------------------------------------------------

// ❌ Isso gera concatenação, não soma
let a = "5";
let b = "10";
console.log(a + b); // "510"

// ✔️ Correto:
console.log(Number(a) + Number(b)); // 15

// -------------------------------------------------------
// Validação de tipos com segurança
// -------------------------------------------------------

// Evitamos usar `any` → usamos `unknown`
// Isso obriga validação antes de usar
function calcularSeguro(n1: unknown, n2: unknown): number {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Os valores devem ser números!");
  }

  return n1 + n2;
}

// -------------------------------------------------------
// Tratamento de erro (try/catch moderno)
// -------------------------------------------------------

try {
  console.log(calcularSeguro(5, 10));   // OK
  console.log(calcularSeguro("5", 10)); // ERRO
} catch (e: unknown) {
  // ⚠️ Em TypeScript, erro é "unknown"
  // então precisamos verificar antes de acessar

  if (e instanceof Error) {
    console.error(e.message);
  } else {
    console.error("Erro desconhecido");
  }
}