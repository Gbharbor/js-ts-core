// Classe que representa um personagem genérico
class Character {
    constructor(name) {
        this.name = name;
        this.life = 1; // Vida mínima inicializada como 1 para evitar valores negativos
        this.maxlife = 1; // Vida máxima inicializada como 1
        this.attack = 0; // Ataque inicializado como 0
        this.defense = 0; // Defesa inicializada como 0
    }

    // Getter para a vida do personagem
    get life() {
        return this._life; // Usando _life para evitar recursividade infinita
    }

    // Setter para a vida do personagem
    set life(newlife) {
        // Se a nova vida for menor que 0, define a vida como 0, caso contrário, usa o novo valor de vida
        this._life = newlife < 0 ? 0 : newlife;
    }
}

// Classe que representa um guerreiro
class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100; // Vida inicial do guerreiro
        this.attack = 10; // Ataque do guerreiro
        this.defense = 8; // Defesa do guerreiro
        this.maxlife = this.life; // Vida máxima do guerreiro
    }
}

// Classe que representa um mago
class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80; // Vida inicial do mago
        this.attack = 15; // Ataque do mago
        this.defense = 3; // Defesa do mago
        this.maxlife = this.life; // Vida máxima do mago
    }
}

// Classe que representa um monstro pequeno
class LittleMonster extends Character {
    constructor() {
        super("little monster");
        this.life = 40; // Vida inicial do monstro pequeno
        this.attack = 4; // Ataque do monstro pequeno
        this.defense = 4; // Defesa do monstro pequeno
        this.maxlife = this.life; // Vida máxima do monstro pequeno
    }
}

// Classe que representa um monstro grande
class BigMonster extends Character {
    constructor() {
        super("Big monster");
        this.life = 120; // Vida inicial do monstro grande
        this.attack = 16; // Ataque do monstro grande
        this.defense = 6; // Defesa do monstro grande
        this.maxlife = this.life; // Vida máxima do monstro grande
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        // Define os lutadores e seus elementos HTML correspondentes
        this.fighter1 = fighter1; // Lutador 1
        this.fighter2 = fighter2; // Lutador 2
        this.fighter1El = fighter1El; // Elemento HTML do Lutador 1
        this.fighter2El = fighter2El; // Elemento HTML do Lutador 2
        this.log = logObject;
    }
    start() {
        // Inicia o cenário
        this.update(); // Atualiza a tela com as informações iniciais dos lutadores

        // Adiciona ouvintes de eventos aos botões de ataque de cada lutador
        this.fighter1El.querySelector(".attackbutton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector(".attackbutton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1));
    }
    update() {
        // Atualiza a tela com as informações dos lutadores
        // Atualiza o nome e a barra de vida do Lutador 1 no elemento HTML correspondente
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${f1pct}%`;

        // Atualiza o nome e a barra de vida do Lutador 2 no elemento HTML correspondente
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${f2pct}%`;
    }
    doAttack(attacking, attacked) {
        // Simula um ataque entre dois lutadores
        // Verifica se algum dos lutadores já está morto
        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage("Não é possível atacar, um dos lutadores já está morto.");
            return;
        }
        // Calcula fatores aleatórios de ataque e defesa entre 0 e 2
        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        // Calcula o dano real de ataque e defesa
        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        // Verifica se o ataque foi bem-sucedido
        if (actualAttack > actualDefense) {
            // Aplica o dano ao lutador atacado
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
        } else {
            // Exibe mensagem de defesa bem-sucedida
            this.log.addMessage(`${attacked.name} conseguiu defender o ataque.`);
        }

        // Atualiza a tela com as novas informações dos lutadores após o ataque
        this.update();
    }
}
class Log {
    constructor(listEl) {
        this.list = []; // Inicializa a lista de mensagens vazia
        this.listEl = listEl; // Armazena o elemento HTML onde as mensagens serão exibidas
    }

    addMessage(msg) {
        this.list.push(msg); // Adiciona a mensagem à lista
        this.render(); // Chama o método render para atualizar a exibição das mensagens
    }
t
    render() {
        // Limpa o conteúdo atual do elemento HTML
        this.listEl.innerHTML = "";

        // Itera sobre a lista de mensagens e cria elementos <li> para cada uma delas
        this.list.forEach(message => {
            const li = document.createElement("li"); // Cria um elemento <li>
            li.textContent = message; // Define o texto da mensagem no elemento <li>
            this.listEl.appendChild(li); // Adiciona o elemento <li> ao elemento HTML da lista
        });
    }
}