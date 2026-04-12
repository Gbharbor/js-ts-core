function repeticaoDeZeroACem() {
    let output = '';
    for (let n = 1; n <= 100; n++) {
        output += n + '\n';
    }
    document.getElementById('outputRepeticaoDeZeroACem').innerText = output;
}

function somaPositivosPares() {
    let sum = 0;
    for (let n = 2; n < 100; n += 2) {
        sum += n;
    }
    document.getElementById('outputSomaPositivosPares').innerText = `A soma dos números pares é: ${sum}`;
}

function repetirHello() {
    let output = '';
    for (let i = 1; i <= 10; i++) {
        output += 'HELLO\n';
    }
    document.getElementById('outputRepetirHello').innerText = output;
}

function tabelaMultiplicacao() {
    const valor = parseInt(document.getElementById('multiplicar').value);
    let output = '';
    for (let i = 1; i <= 10; i++) {
        output += `${valor} x ${i} = ${valor * i}\n`;
    }
    document.getElementById('outputTabelaMultiplicacao').innerText = output;
}

function somaDeNumerosPositivos() {
    let sumpositivo = 0;
    for (let i = 1; i <= 10; i++) {
        const n = parseInt(prompt(`Digite o número ${i}:`));
        if (n > 0) sumpositivo += n;
    }
    document.getElementById('outputSomaDeNumerosPositivos').innerText = `A soma dos números positivos é: ${sumpositivo}`;
}

function calcularFatorial() {
    let fatorial = parseInt(document.getElementById('fatorial').value);
    let fat = 1;
    for (let i = fatorial; i > 1; i--) {
        fat *= i;
    }
    document.getElementById('outputCalcularFatorial').innerText = `O fatorial de ${fatorial} é: ${fat}`;
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