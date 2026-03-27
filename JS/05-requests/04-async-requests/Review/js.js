// Transformação entre JSON e String

// JSON.parse: Transforma uma string JSON em um objeto JavaScript
let pessoa = JSON.parse('{"nome": "Gui", "idade": 90}');
// Acessa propriedades do objeto JavaScript resultante
console.log("Nome da pessoa:", pessoa.nome); // "Gui"

// JSON.stringify: Transforma um objeto JavaScript em uma string JSON
let pessoa1 = JSON.stringify({ nome: 'gui', idade: 80 });
console.log("Pessoa como string JSON:", pessoa1);

// Outra forma de uso com JSON.stringify
let pessoa2 = { nome: 'joana', idade: 98 };
let pessoaString = JSON.stringify(pessoa2);
console.log("Outra pessoa como string JSON:", pessoaString);

// Exemplo de uso em busca, onde a entrada de um usuário é transformada em string JSON
let busca = { input: 'gui' };
let buscaString = JSON.stringify(busca);
console.log("Busca como string JSON:", buscaString);

// Transformando uma lista de resultados de string JSON para JSON real
let resultado = { lista: ['gui', 'gui porto', 'guilherme'] };
let res = JSON.stringify(resultado); // Transforma o objeto resultado em string JSON
console.log("Lista de resultados como string JSON:", res);

// Converte a string JSON de volta para um objeto JSON
let resJSON = JSON.parse(res);
console.log("Lista de resultados como objeto JSON:", resJSON);

// Exemplo de Promise em JavaScript

// Função que simula pegar temperatura e retorna uma Promise
function pegarTemperatura() {
    // Cria e retorna uma Promise que recebe duas funções: resolve e reject
    return new Promise(function (resolve, reject) {
        console.log("Pegando temperatura...");

        // Simula um atraso na resposta com setTimeout
        setTimeout(function () {
            resolve('40 na sombra'); // Sucesso: resolve é chamado com o resultado
        }, 2000);
    });
}

// Usando a função pegarTemperatura e armazenando a Promise em uma variável
let temp = pegarTemperatura();
console.log("Temperatura:", temp); // Mostra a Promise ainda pendente

// Tratamento da Promise com .then() e .catch()
// .then(): Executado quando a Promise é resolvida com sucesso
temp.then(function (resultado) {
    console.log("TEMPERATURA:", resultado); // Exibe a temperatura quando resolve é chamado
});

// .catch(): Executado caso a Promise seja rejeitada (exemplo de erro)
temp.catch(function (error) {
    console.log("Erro ao pegar a temperatura:", error);
});

/*
Explicações Adicionais:

1. **JSON.parse e JSON.stringify**:
   - `JSON.parse`: Transforma uma string JSON em um objeto JavaScript.
   - `JSON.stringify`: Converte um objeto JavaScript em uma string JSON.
   - Esses métodos são essenciais para trabalhar com dados em APIs, pois a maioria dos dados é transmitida em JSON.

2. **Promise**:
   - Promise: Representa uma operação assíncrona que pode ser resolvida (sucesso) ou rejeitada (erro).
   - `resolve`: Chamada quando a operação é bem-sucedida, fornecendo um resultado.
   - `reject`: Chamada quando ocorre um erro, passando o erro como parâmetro.

3. **then() e catch()**:
   - `then()`: Método que define o que fazer quando a Promise é resolvida. Recebe o resultado como parâmetro.
   - `catch()`: Método que define o que fazer quando a Promise é rejeitada. Recebe o erro como parâmetro.

4. **Simulação de Atraso com setTimeout**:
   - `setTimeout`: Aqui, usado para simular uma requisição que leva tempo para retornar um resultado.
   - Após 2 segundos, `resolve` é chamado e a Promise é resolvida com o resultado ("40 na sombra").

5. **Conceito de Estado da Promise**:
   - Inicialmente, a Promise fica no estado "pending" (pendente).
   - Quando `resolve` ou `reject` são chamados, a Promise é concluída e seu estado muda para "fulfilled" (realizada) ou "rejected" (rejeitada), respectivamente.
*/