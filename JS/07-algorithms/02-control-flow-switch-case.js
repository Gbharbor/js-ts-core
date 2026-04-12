    // Função para calcular a operação baseada no operador
    function calcEscolha() {
        const numa = parseFloat(document.getElementById('numa').value);
        const numb = parseFloat(document.getElementById('numb').value);
        const ope = document.getElementById('ope').value;
        let result;

        switch (ope) {
            case "+":
                result = numa + numb;
                break;
            case "-":
                result = numa - numb;
                break;
            case "*":
                result = numa * numb;
                break;
            case "/":
                if (numb === 0) {
                    document.getElementById('calcOutput').innerText = "Erro: Divisão por zero.";
                    return;
                }
                result = numa / numb;
                break;
            default:
                document.getElementById('calcOutput').innerText = "Erro: Operador inválido.";
                return;
        }

        // Exibir o resultado
        document.getElementById('calcOutput').innerText = `${numa} ${ope} ${numb} = ${result}`;
    }

    // Função para copiar o código do bloco <code>
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