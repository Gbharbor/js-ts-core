// Demonstrando funções vinculadas aos eventos no HTML:
// No HTML, as funções foram atribuídas diretamente com "onkeydown", "onkeypress" e "onkeyup":
// <input type="text" placeholder="digite aqui" onkeydown="apertou()" onkeypress="segurou()" onkeyup="soltou()"/>

// Função chamada quando uma tecla é pressionada para baixo
function apertou() {
    console.log("apertou"); 
}

// Função chamada enquanto a tecla está sendo pressionada
function segurou() {
    console.log("segurou");
}

// Função chamada quando a tecla é liberada
function soltou() {
    console.log("soltou documento");
}

// Aqui, seguimos a mesma lógica, mas usando JavaScript para adicionar os eventos.
// Ao invés de usar "onkeydown", "onkeypress" e "onkeyup" no HTML, utilizamos "addEventListener".
// Exemplo para o evento "keyup" usando "addEventListener":
function soltoujs() {
    console.log("soltou pelo js");
}
document.addEventListener("keyup", soltoujs);

// Função que exibe informações sobre a tecla pressionada, incluindo a verificação de teclas especiais (Shift e Alt)
function up(event) {
    console.log("tecla pressionada: " + event.code); // Mostra o código da tecla pressionada
    console.log("shift? " + event.shiftKey); // Retorna true se o Shift foi pressionado
    console.log("option? " + event.altKey); // Retorna true se o Alt/Option foi pressionado
    console.log(event.code); // Mostra o código completo da tecla pressionada (inclui Shift, Cmd, etc.)
    console.log(event.key); // Mostra o valor da tecla sem detalhes específicos
    console.log(event.shiftKey); // Verifica se o Shift foi pressionado
}

// Associando a função "up" ao evento "keyup" de um campo de entrada específico
const input = document.querySelector(".input1");
input.addEventListener("keyup", up);