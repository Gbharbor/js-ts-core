// O setTimeout executa uma função apenas uma vez após um determinado período de tempo, 
// enquanto o setInterval executa a função repetidamente em intervalos especificados.

let timer; // Variável global para armazenar o identificador do timeout

// Função para iniciar o timeout
function rodar() {
    timer = setTimeout(function() { // Define o timeout e armazena o identificador em 'timer'
        // Exemplo: Atualiza o conteúdo do elemento '.demo' após o tempo especificado
        document.querySelector('.demo').innerHTML = "Rodou"; // Mensagem que será exibida após 2 segundos
    }, 2000); // Executa a função após 2000 milissegundos (2 segundos)

    // Observação: A função rodar é chamada através de um evento (ex., onclick) no botão.
    // Quando o botão é clicado, o timeout inicia, e após 2 segundos, a função é executada.
}

// Função para cancelar o timeout antes que ele seja executado
function parar() {
    clearTimeout(timer); // Cancela o timeout configurado em 'rodar' usando o identificador 'timer'
    // O clearTimeout só funciona se o timeout ainda não foi executado.
    // Se o timeout já foi acionado e a função foi executada, o clearTimeout não terá efeito.
}