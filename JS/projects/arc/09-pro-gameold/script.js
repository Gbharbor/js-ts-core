// Dados iniciais
// Objeto que representa o tabuleiro do jogo, com cada posição inicializada como vazia.
let quadro = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

// Variável para indicar se o jogo está em andamento.
let playing = false;

// Variável para definir quem está jogando ('x' ou 'o').
let vez = 'x';

// Variável para armazenar mensagens de aviso ou resultados do jogo.
let warning = '';

// Inicializa o jogo chamando a função reset.
reset();

// Eventos
// Adiciona um evento ao botão de reset para reiniciar o jogo ao ser clicado.
document.querySelector('.reset').addEventListener('click', reset);

// Adiciona eventos de clique a cada item do tabuleiro.
document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', (e) => {
        // Obtém o atributo 'data-item' para saber qual posição foi clicada.
        let loc = e.target.getAttribute('data-item');
        
        // Verifica se o jogo está em andamento e se a posição clicada está vazia.
        if (playing && quadro[loc] === '') {
            // Atualiza a posição no tabuleiro com o símbolo do jogador atual.
            quadro[loc] = vez;

            // Renderiza o tabuleiro e alterna o jogador.
            renderQuadro();
            togglePlayer();
        }
    });
});

// Funções
// Reinicia o estado do jogo.
function reset() {
    warning = ''; // Limpa as mensagens de aviso.

    // Define aleatoriamente quem começa jogando ('x' ou 'o').
    let random = Math.floor(Math.random() * 2);
    vez = random === 0 ? 'x' : 'o';

    // Limpa o tabuleiro, deixando todas as posições vazias.
    for (let i in quadro) {
        quadro[i] = '';
    }

    // Atualiza as renderizações do tabuleiro e das informações.
    renderQuadro();
    renderInfo();

    // Marca o jogo como ativo.
    playing = true;
}

// Renderiza o tabuleiro na tela.
function renderQuadro() {
    for (let i in quadro) {
        // Seleciona o elemento correspondente à posição do tabuleiro.
        let item = document.querySelector(`div[data-item=${i}]`);
        // Atualiza o conteúdo do elemento com o símbolo do jogador ou o mantém vazio.
        if (quadro[i] !== '') {
            item.innerHTML = quadro[i];
        } else {
            item.innerHTML = '';
        }
    }

    // Verifica se há um vencedor ou empate.
    checkGame();
}

// Atualiza as informações do jogo na tela.
function renderInfo() {
    // Mostra de quem é a vez de jogar.
    document.querySelector('.vez').innerHTML = vez;
    // Mostra mensagens de aviso ou resultado.
    document.querySelector('.resultado').innerHTML = warning;
}

// Alterna o jogador atual.
function togglePlayer() {
    // Troca entre 'x' e 'o'.
    vez = vez === 'x' ? 'o' : 'x';
    // Atualiza as informações exibidas na tela.
    renderInfo();
}

// Verifica as condições de vitória ou empate.
function checkGame() {
    if (checkWinnerFor('x')) {
        // Define mensagem de vitória para o jogador 'x'.
        warning = 'O "x" venceu';
        playing = false; // Finaliza o jogo.
    } else if (checkWinnerFor('o')) {
        // Define mensagem de vitória para o jogador 'o'.
        warning = 'O "o" venceu';
        playing = false; // Finaliza o jogo.
    } else if (isFull()) {
        // Verifica se todas as posições do tabuleiro estão preenchidas.
        warning = 'Deu empate';
        playing = false; // Finaliza o jogo.
    }
}

// Verifica se o jogador passado como argumento venceu.
function checkWinnerFor(i) {
    // Define as combinações vencedoras possíveis.
    let pos = [
        'a1,a2,a3', // Linha superior.
        'b1,b2,b3', // Linha do meio.
        'c1,c2,c3', // Linha inferior.

        'a1,b1,c1', // Coluna esquerda.
        'a2,b2,c2', // Coluna do meio.
        'a3,b3,c3', // Coluna direita.

        'a1,b2,c3', // Diagonal principal.
        'a3,b2,c1'  // Diagonal secundária.
    ];

    // Verifica se todas as posições de uma combinação pertencem ao jogador.
    for (let w in pos) {
        let pArray = pos[w].split(','); // Separa as posições.
        let hasWon = pArray.every(option => quadro[option] === i); // Verifica se todas têm o símbolo do jogador.
        if (hasWon) return true; // Retorna verdadeiro se o jogador venceu.
    }

    return false; // Retorna falso se nenhuma combinação foi atingida.
}

// Verifica se o tabuleiro está completamente preenchido.
function isFull() {
    for (let i in quadro) {
        if (quadro[i] === '') {
            return false; // Retorna falso se houver alguma posição vazia.
        }
    }
    return true; // Retorna verdadeiro se todas as posições estiverem preenchidas.
}