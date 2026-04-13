//pronto ja criamos as factorys, e agr como q criamos o nosso guerreiro por exemplo ?
const char = createSorcerer ('guiguerreiro'); //isso e como se eu estivesse executando a funcao crateknight que fiz em fight functional
// agr para podermos visualizar isso, digamos que quero ver o nome e a vida no console.
console.log(char.name);
console.log(`vida guerreiro: ${char.life}`);
// mas queria q fosse um sorcerer, ai so mudmos o createKnight por createSorcerer.
/*const char1 = createSorcerer ('guimago');
console.log(char1.name);
console.log(`vida mago: ${char1.life}`);
//como pode ver n coloquei um nome diretamente para o little monster pq ja defini como padrao em fight functional q ele sera little monster.
*/
const monster = createBigMonster();
console.log(monster.name);
console.log(`Vida little monster: ${monster.life}`);

//entao ja temos o Char e o monster e joguei eles dentro da funcao start para iniciar o jogo.
stage.start(
    char,//fighter1
    monster, //fighter2
    document.querySelector('#char'),//pegamos o id do char do HTML
    document.querySelector('#monster')//pegamos o id do char do HTML
)
//agr vms terminar o nosso update em fight functional, para calcular a porcentagem para calcular a barrinha