//aqui vamos criar o personagem padao, e dps vms montar os persoangens com base nesse padrao
const defaultCharacter = {
    name : '', //vazio pq cada um recebera seu proprio nome
    life: 1, //life com pelo menos 1 para o personagem n nascer morto
    maxLife: 1,
    attack: 0,
    defense: 0
}
//Agora vamos criar os Factorys, para poder criar um guerreiro por exemplo
//vc pode usar o function ou o const, mas aqui vms usar o const 

const createKnight = (name) => {
    return {
        ...defaultCharacter, //usando isso pegamos tds itens do personagem padrao, e dps mudamos oq a gente quiser abaixo.
        name, //como os 2 sao iguais, n preciso mudar o nome aqui.
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',//igual a classe n damos um nome pra ele, entao o nome padrao dele sera sempre little monster
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'big monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

//agr vms criar o objeto que vai controlar nosso cenario, ele precisa de um lutador 1 e lutador 2, onde esta os elementos do lutador 1 e 2. Tendo elas comecamos a exibir o jogo
const stage = {
    fighter1: null, //vms criar eles null e tmb os elementos do lutador em fighter1El, e fighter2El
    fighter2: null,
    fighter1El: null,
    fighter2El: null,
    //agr vms criar a funcao que vai ser responavel por iniciar o cenario, ela meio q fara uma funcao de construtor, e ira receber as 4 coisas que precisamos. 
    start(fighter1,fighter2,fighter1El,fighter2El) {
        //agr vms usar o this para preencher do nosso proprio objeto.
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        //agr nosso proximo passo é add o evento do botao atacar. tem q ser fighter1El, pq e o elemento, usaremos o querySelector e como e uma classe usamos o .
        //agr vms add o eventlistener, para ele criar um evento quando for clicado, e repare q ja criei a funcao atraves da arrow function de ataque, que ja criarei a seguir, como estamos dentro do objeto usamos o this. para puxar a function q criei aqui dentro.
        //!ESSE E COMO SE FOSSE O BOTAO DA ESQUERDA!
        this.fighter1El.querySelector('.attackButton').addEventListener('click',()=> this.doAttack(this.fighter1, this.fighter2)); //em resumo estou executando a funcao q o fighter1 ataca o fighter2
        //ja criado a funcao e executando ela, dentro da funcao diremos quem ira atacar, q seram os fighter1 e fighter2 usando a msm logica do this.
        //!ESSE E O BOTAO DA DIREITA!
        //e o msm esquema, a gente pode copiar e colar e substituir fighter2El, porem fighter2 q atacara fighter1
        this.fighter2El.querySelector('.attackButton').addEventListener('click',()=> this.doAttack(this.fighter2, this.fighter1)); //em resumo estou executando a funcao q o fighter2 ataca o fighter1

        //Agora faremos o update das informacoes com os dados do fighter1 e 2. q criaremos um update, usaremos o this.update por ja estar dentro do stage, e criaremos a funcao do update fora do start, igual fizemos com doAttack
        this.update()

    },
    update(){

        //Em resumo iremos atualizar as inf dos elementos de fighter 1 e fighter 2,vms ja exebir o nome, e vmc criar um tamplate string para exibir alem do nome, quanto de vida ele tem.
        //vms usar tmb o tofixed(1) para arredondar para uma casa decimal
        //!FIGHTER1!
        this.fighter1El.querySelector('.name').innerHTML =`${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        //agr vms criar a porcentagem para calcualr a barrinha de vida q sera a vida do personagem dividido por sua vida maxima vezes 100
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        //agr colocamos essa formula na nossa barrinha do elemento fighter1, q vai puxar a barrinha do nosso html, e mudara sua largura de acordo com f1Pct usando style.width
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`
        //!FIGHTER2!
        //Aqui e a msm logica porem vamos alterar para o fighter2, f2Pct, etc.
        this.fighter2El.querySelector('.name').innerHTML =`${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    }, //por se tratar de objetos n esqueca da virgula.
    //aqui esta a funcao de ataque do eventlistener q criei acima.de quem esta atacando e quem foi atacado, agr com ela criada posso colocar no eventlistener, como estamos dentro da classe, usamos o this 
    doAttack(attacking, attacked) {
        //dps q criamos nosso update completamente, podemos testar para ver se aparecera o atack usando esse teste, quando clicarmos no botao.
        log.addMessage(`${attacking.name} atacando ${attacked.name}`);
        //agr sempre q ocorrer um ataque, vms puxar o update para atualizar os dados do placar.
        
        //agr vms criar o processo de um atacar o outro
        //primeiramente se um dos dois estiver morto, o q estiver atacando o u sendo atacado, aparecera essa mensagem quando a vida for menor q zero, usamos o return para ele parar a execucao.
        if (attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('alguem ta morto,n pode atacar');
            return;
        }
        //Agora vamos criar o fato de ataque.
        const attackFactor = (Math.random() * 2).toFixed(2); //esse math.random criara numeros pseudoaleatorios, essa multiplicacao por2 em vez de intervalor de 0,1 sera 0,2. O fixed ja expliquei, ira converter em 2 casas decimais convertendo em strings.
        const defenseFactor = (Math.random() * 2).toFixed(2);
        //essa parte e um pouco confusa, mas em resumo os valores aleatorios gerados, sera multiplicado de acordo com o poder de atack ou defense padrao dos nossos personagens, para poder fazer sentido a defesa e ataque dos personagens.
        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;
        //agr so precisamos fazer a verificacao.
        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack; //ou seja se o attack for maior q a defesa '-=' isso e um atalho para subtracao basicamente, ou seja ira diminuir o ataque recebido da vida.
                //Mas antes precisamos fazer uma verificacao extra, como dentro dos personagens n criamos a verificcao da vida deles para n ficar negativa, iremos criar aqui mesmo.
                //isso basicamente estou criando uma pergunta se atacked.life for menor q zero, continuara zero, e caso contrario usando o ":" fica attacked.life mesmo ou seja so atualiza o valor da vida do atacado.
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            //agr mostraremos a mensagem de ataque, dano e atacado.
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em  ${attacked.name}  `)
        } else {
            log.addMessage(`${attacked.name} conseguiu defender.`)
        }
        this.update();
    }
    //Agr q ja criamos nosso start, executamos ele em script1, para poder dar inicio no jogo.
};
// aqui abaxio de stage vms criar o objeto de log, onde aparecera como se fosse o historico do "combate"
const log = { 
    list : [],// teremos os items digamos assim, para serem lidos
    //recebo a mensagem
    addMessage(msg) {
        this.list.push(msg) //ou seja usando a logica do this pq estamos na msm classe, e o push pra acrescentar dentro do log as novas mensagens.
        this.render(); //e usando o render mostramos na tela tudo, ja iremos criar a funcao render.
    },
    render() {
        const logEl = document.querySelector('.log'); //estou puxando a classe log do HTML
        logEl.innerHTML =  ' ';//estou criando ele vazio primeiramente, deixando limpo
        //agr faremos um loop puxando a list q criei, para ir exibindo as mensagens
        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
        //apos fazermos a criacao das mensagens, mudamos no console log em doAttack para log.addMessage
    }
}