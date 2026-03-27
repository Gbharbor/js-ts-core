// Evento para detectar a tecla pressionada em todo o corpo do documento
document.body.addEventListener('keyup', (event) => {
    // Converte o código da tecla para minúsculas e chama a função playSound
    playSound(event.code.toLowerCase());
});

// Evento para o botão de tocar dentro do compositor
document.querySelector('.composer button').addEventListener('click', () => {
    // Captura o valor digitado no campo de input
    let song = document.querySelector('#input').value;

    // Verifica se há algum valor digitado na composição
    if (song !== ' ') {
        // Converte a string em um array, separando cada caractere
        let songArray = song.split('');
        // Chama a função para tocar a composição com base no array de caracteres
        playComposition(songArray);
    }
});

// Função para tocar o som associado a uma tecla específica
function playSound(sound) {
    // Seleciona o elemento de áudio com o ID correspondente
    let audioElement = document.querySelector(`#s_${sound}`);
    // Seleciona a tecla correspondente ao data-key
    let keyElement = document.querySelector(`div[data-key='${sound}']`);

    // Verifica se o elemento de áudio existe
    if (audioElement) {
        audioElement.currentTime = 0; // Reinicia o áudio para tocar do início
        audioElement.play(); // Toca o áudio
    }

    // Adiciona a classe 'active' à tecla para um efeito visual
    if (keyElement) {
        keyElement.classList.add('active');

        // Remove a classe 'active' após 300ms para que o efeito visual seja temporário
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

// Função para tocar uma composição baseada em um array de teclas
function playComposition(songArray) {
    let wait = 0; // Define o intervalo de espera inicial

    // Itera sobre cada tecla no array de composição
    for (let songItem of songArray) {
        // Usa setTimeout para tocar cada som com um intervalo
        setTimeout(() => {
            // Chama playSound para cada tecla com base no intervalo de espera
            playSound(`key${songItem}`);
        }, wait);
        
        wait += 250; // Aumenta o intervalo de espera para o próximo som em 250ms
    }
}