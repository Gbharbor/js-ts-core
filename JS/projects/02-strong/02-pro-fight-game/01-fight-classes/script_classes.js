let log = new Log(document.querySelector(".log")); // Corrigido para 'Log' com L maiúsculo
let char = new Knight("GuiPorto");
let monster = new BigMonster();
// Definindo o palco do jogo
const stage = new Stage(
    char, // O cavaleiro
    monster, // O monstro
    document.querySelector("#char"), // O elemento HTML onde o cavaleiro será exibido
    document.querySelector("#monster"), // O elemento HTML onde o monstro será exibido
    log
);
// Iniciando o jogo
stage.start();