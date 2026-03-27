            //HELLO WORLD//
!alert ("Hello World");
console.log("hello world2.0")
            //VARIAVEIS//
let nombre = "gui";
let age = 25; 
let lista = ["gui","ana","Bia"];
let object = {name: "Gui", age:24};
let logado = true;
            //CONST/VAR/LET//
const idade = 23;
var nome = "gio";
console.log(nome);
nome = "bia";
console.log(nome);
            //OPERACOES EM VARIAVEIS//
let firstname = "gui";
let lastname = "porto";
let FullName = `${firstname} ${lastname}`;
console.log(`usando operacoes em variaveis : ${FullName}`);
let n1 = 20;
let n2 = 20;
let n3 = 10;
let operacoes = `resultado: ${(n1 + n2) - n3}`
console.log(operacoes);
            //CONDICINAIS IF ELSE//
let anos = 20;
if (anos >=18) {
    console.log(`Maior de Idade : ${anos}`);
} else {
    console.log(`Menor de Idade : ${anos}`);
}
            //CONDICIONAIS == e ===//
let number = 40;
if (number === 40) {
    console.log("Pensou no Number Certo");
} else {
    console.log("Pensou no Number Errado");
}
let AttAge = 30;
if (AttAge === 30) {
    AttAge = AttAge + 2;
    console.log(`vc att sua idade: ${AttAge}`);
}
            //MULTICONDICIONAIS && e ||//
let birth = 20;
if (birth >= 18 && birth < 60) {
    console.log("Vc e adulto!")
}
let birth1 = 12;
if (birth1 >= 18 || birth1 < 60) {
    console.log("vc e adulto ou talvez nao" + ' ' + birth1 + " anos");
}
            //CONDICIONAIS DUPLA IF ELSE//
let ok = false;
if (ok) {
    console.log("entrou");
} else {
    console.log("n entrou");
}
let birth2 = 19;
let adulto = idade >= 18 && idade < 60;
if (adulto) {
    console.log("maior");
} else {
    console.log("menor");
}
            //CONDICIONAIS DUPLAS ELSE IF//
let ages = 12;
if (ages < 18) {
    console.log("Teen/kids");
} else if (ages >=18 && ages < 60){
    console.log("Adult");
} else if (ages > 60) {
    console.log("elderly");
}
            //CONDICIONAIS TERNARIA//
let isMember = false;
let shipping = isMember ? 2 : 10;
console.log(isMember ? "is member" : "not member");
console.log("frete: " + shipping);

let age1 = 14;
let isAdult = ((age1>=18 && age1 > 60) ? "ADULTO" : "N ADULTO");
console.log(isAdult);
            //SWITCH//
let profession = "fireman";
console.log("Profissao: " + profession);
switch (profession) {
    case "supervisor": 
        console.log("white tshirt");
    break;
    case "police":
        console.log("blue tshirt");
    break;
    case "fireman" :
        console.log("red tshirt");
    break;
    default :
        console.log("black tshirt");
    break;
}