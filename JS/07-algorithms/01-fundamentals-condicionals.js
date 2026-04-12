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
    function reajusteSalarial() {
        let sal = parseFloat(document.getElementById('salary').value);
        let nsal;

        if (sal > 1000) {
            nsal = (sal * 15) / 100 + sal;
        } else if (sal >= 500) {
            nsal = (sal * 10) / 100 + sal;
        } else {
            nsal = (sal * 5) / 100 + sal;
        }

        document.getElementById('salaryOutput').innerText = `Novo Salário: ${nsal.toFixed(2)}`;
    }

    function pagamentoAnual() {
        let id = parseInt(document.getElementById('idNumber').value);
        let final = id % 10;
        let result;

        if (final === 0) {
            result = "Pagamento em Janeiro";
        } else if (final === 1) {
            result = "Pagamento em Fevereiro";
        } else {
            result = "Pagamento em Março";
        }

        document.getElementById('paymentOutput').innerText = result;
    }

    function maiorEntreTres() {
        let a = parseInt(document.getElementById('num1').value);
        let b = parseInt(document.getElementById('num2').value);
        let c = parseInt(document.getElementById('num3').value);
        let result;

        if (a > b && a > c) {
            result = `Maior: ${a}`;
        } else if (a === b && b === c) {
            result = "Todos os números são iguais.";
        } else if (b > c) {
            result = `Maior: ${b}`;
        } else {
            result = `Maior: ${c}`;
        }

        document.getElementById('biggerOutput').innerText = result;
    }

    function calculadora() {
        let numa = parseFloat(document.getElementById('number1').value);
        let numb = parseFloat(document.getElementById('number2').value);
        let ope = document.getElementById('operator').value;
        let result;

        if (ope === "+") {
            result = numa + numb;
        } else if (ope === "-") {
            result = numa - numb;
        } else if (ope === "*") {
            result = numa * numb;
        } else if (ope === "/") {
            result = numa / numb;
        }

        document.getElementById('calcOutput').innerText = `${numa} ${ope} ${numb} = ${result}`;
    }