function repitaAte100() {
    let output = '';
    let n = 0;
    do {
        output += `${n}\n`;
        n++;
    } while (n <= 100);
    document.getElementById('outputRepitaAte100').innerText = output;
}

function somaInteirosPositivosAte100() {
    let sum = 0;
    let n = 2;
    do {
        sum += n;
        n += 2;
    } while (n <= 100);
    document.getElementById('outputSomaInteirosPositivosAte100').innerText = `A soma dos números pares até 100 é: ${sum}`;
}

function repetirUmCaractere() {
    let output = '';
    let n = 1;
    do {
        output += `${n} HELLO!\n`;
        n++;
    } while (n <= 10);
    document.getElementById('outputRepetirUmCaractere').innerText = output;
}

function tabuada() {
    const valor = parseInt(document.getElementById('tabuada').value);
    let output = '';
    let contador = 1;
    do {
        output += `${valor} x ${contador} = ${valor * contador}\n`;
        contador++;
    } while (contador <= 10);
    document.getElementById('outputTabuada').innerText = output;
}

function copyCode(button) {
    const codeElement = button.nextElementSibling;
    const codeText = codeElement.innerText;

    navigator.clipboard.writeText(codeText).then(() => {
        button.innerText = "Copiado!";
        setTimeout(() => {
            button.innerText = "Copiar";
        }, 2000);
    }).catch(err => {
        alert("Erro ao copiar: " + err);
    });
}