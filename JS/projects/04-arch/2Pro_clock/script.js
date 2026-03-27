// Seleciona os elementos HTML para exibir o horário digital e os ponteiros do relógio analógico
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s'); // Ponteiro dos segundos
let mElement = document.querySelector('.p_m'); // Ponteiro dos minutos
let hElement = document.querySelector('.p_h'); // Ponteiro das horas

// Função principal para atualizar o relógio a cada segundo
function updateClock() {
    let now = new Date(); // Pega a hora atual com informações completas de data e hora
    let hour = now.getHours(); // Extrai a hora atual
    let minute = now.getMinutes(); // Extrai o minuto atual
    let second = now.getSeconds(); // Extrai o segundo atual

    // Atualiza o relógio digital
    /* 
    Exibe o horário no formato HH:MM:SS.
    `fixZero()` é chamada para adicionar um zero à esquerda quando o valor é menor que 10.
    */
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // Cálculo da posição dos ponteiros para o relógio analógico
    let sDeg = (360 / 60) * second - 90; // Calcula o ângulo do ponteiro dos segundos
    let mDeg = (360 / 60) * minute - 90; // Calcula o ângulo do ponteiro dos minutos
    let hDeg = (360 / 12) * hour - 90;   // Calcula o ângulo do ponteiro das horas

    // Aplica o ângulo de rotação calculado aos ponteiros
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

// Função para adicionar um zero à esquerda se o valor for menor que 10
function fixZero(time) {
    return time < 10 ? `0${time}` : time; // Retorna o valor com zero à esquerda, se necessário
}

// Define o intervalo para atualizar o relógio a cada segundo
setInterval(updateClock, 1000); // Chama updateClock a cada 1000ms (1 segundo)

// Chamada inicial para atualizar o relógio sem esperar o primeiro intervalo
updateClock();