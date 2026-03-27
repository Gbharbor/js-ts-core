// Ao somar, valores como strings podem causar erros, pois o "+" concatena strings em vez de somá-las como números. 
// Isso destaca a importância de usar TypeScript. Uma solução seria usar uma verificação com `typeof` dentro da função.
var numero1 = document.getElementById('numero1');
// O `as HTMLInputElement` ajuda a eliminar alguns erros, pois garante que `numero1` será tratado como um input HTML.
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    // Repare que os três pontinhos embaixo de `n1` e `n2` no VSCode não indicam erro. 
    // Eles avisam que podem ocorrer problemas futuros caso os tipos não sejam adequados. 
    // Para prevenir isso, adicionamos explicitamente `: number`.
    return n1 + n2;
}
botao.addEventListener('click', function () {
    // `value` e `innerHTML` sempre retornam strings. 
    // No caso, estamos exigindo números no código, então adicionamos o "+" antes de `numero1.value` e `numero2.value`. 
    // O "+" converte a string para um número. 
    // Depois, usamos `.toString()` para garantir que o resultado seja convertido novamente para string antes de ser exibido.
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
// **Sobre os erros no VSCode:**
// Alguns erros aparecem porque o VSCode pensa que os elementos estão duplicados. 
// Além disso, por padrão, o `value` e o `innerHTML` retornam strings, enquanto exigimos números no código. 
// Usando o "+" antes dos valores, esse problema é resolvido.
// **Gerando o arquivo JavaScript na pasta correta:**
// Quando organizamos os arquivos em pastas, devemos usar o comando a seguir para compilar o TypeScript e gerar o JS na pasta correta. 
// Execute esse comando fora da pasta `src`:
// `tsc src/script.ts --outDir public`
// **Lidando com erros de compilação:**
// Se definirmos, por exemplo, `n2: string` na função `calcular`, o TypeScript gerará um erro. 
// Mesmo assim, ele continuará a gerar o arquivo JS por padrão.
// Podemos configurar o TypeScript para impedir a geração de arquivos caso existam erros. 
// Use o seguinte comando para isso:
// `tsc script.ts --noEmitOnError`
