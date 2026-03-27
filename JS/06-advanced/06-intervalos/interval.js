// Intervalos ou timers permitem configurar a execução de código em intervalos regulares
// Neste exemplo, criaremos um timer que exibirá a hora atual (horas, minutos e segundos) na tela.

// Declaração da variável timer no escopo global para controlar o intervalo
let timer;

// Função para exibir a hora atual
function showTime() {
    let d = new Date(); // Cria uma nova instância de data e hora
    let h = d.getHours(); // Obtém a hora atual
    let m = d.getMinutes(); // Obtém os minutos atuais
    let s = d.getSeconds(); // Obtém os segundos atuais

    // Adiciona um zero à esquerda em minutos e segundos se forem menores que 10
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    // Formata o horário em "hh:mm:ss"
    let txt = h + ':' + m + ':' + s;

    // Exibe o horário formatado no elemento HTML com a classe 'demo'
    document.querySelector('.demo').innerHTML = txt;
}

// Função para iniciar o timer
function comecar() {
    timer = setInterval(showTime, 1000); // Executa a função showTime a cada 1000 ms (1 segundo)
}

// Função para parar o timer
function parar() {
    clearInterval(timer); // Interrompe a execução do intervalo
}

// Inicia a exibição do tempo imediatamente
showTime(); // Exibe a hora assim que a página é carregada

// Opcionalmente, você pode iniciar o timer automaticamente descomentando a linha abaixo
// comecar();

// Observação sobre setInterval e setTimeout:
// - setInterval() executa uma função repetidamente em um intervalo de tempo especificado.
// - setTimeout() executa uma função uma única vez após o tempo especificado, não necessitando de parada manual.