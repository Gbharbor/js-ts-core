function contadorAte99() {
    let output = '';
    for (let n = 0; n <= 99; n++) {
        output += n + '<br>';
    }
    document.getElementById('outputContador').innerHTML = output;
}

function numerosParesAte100() {
    let output = '';
    for (let n = 0; n <= 100; n += 2) {
        output += n + '<br>';
    }
    document.getElementById('outputNumerosPares').innerHTML = output;
}

function tabuada() {
    const valor = parseInt(document.getElementById('tabuadaInput').value);
    if (isNaN(valor)) {
        document.getElementById('outputTabuada').innerHTML = 'Por favor, insira um valor válido.';
        return;
    }
    let output = '';
    for (let contador = 1; contador <= 10; contador++) {
        output += `${valor} x ${contador} = ${valor * contador}<br>`;
    }
    document.getElementById('outputTabuada').innerHTML = output;
}

function potenciaDe3() {
    let output = '';
    const x = 3;
    for (let z = 0; z <= 10; z++) {
        let y = (z === 0) ? 1 : Math.pow(x, z);
        output += `${x}^${z} = ${y}<br>`;
    }
    document.getElementById('outputPotencia').innerHTML = output;
}

function calcularTermosFracionarios() {
    let soma = 0;
    let output = '';
    for (let i = 1; i <= 10; i++) {
        soma += 1 / i;
    }
    output = `A soma dos 10 primeiros termos é: ${soma.toFixed(4)}`;
    document.getElementById('outputTermosFracionarios').innerHTML = output;
}

function copyCode(button) {
    const codeElement = button.nextElementSibling;
    const codeText = codeElement.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        alert('Código copiado para a área de transferência!');
    });
}
