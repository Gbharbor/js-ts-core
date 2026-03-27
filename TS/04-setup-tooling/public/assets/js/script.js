"use strict";
// -------------------------------------------------------
// Sobre o WatchMode no TypeScript
// -------------------------------------------------------
// **Problema sem o WatchMode:**
// Sempre que fazemos alterações no arquivo TypeScript (`script.ts`), precisamos rodar o comando de compilação manualmente:
// `tsc script.ts`
// Isso gera o arquivo JavaScript correspondente, mas ter que repetir esse processo toda vez que alterarmos algo pode ser demorado e tedioso, especialmente em projetos maiores.
// **Solução com o WatchMode:**
// O WatchMode monitora automaticamente as alterações no arquivo TypeScript e o recompila sempre que salvamos.
// Com o comando:
// `tsc script.ts -w`
// O TypeScript entra em modo de observação e fica "assistindo" o arquivo `script.ts`.
// Assim, toda vez que fizermos uma mudança e salvarmos o arquivo, ele será compilado automaticamente.
// **Como testar:**
// 1. Abra o terminal e navegue até a pasta onde está o arquivo `script.ts`.
// 2. Execute o comando: `tsc script.ts -w`.
// 3. Mantenha o terminal aberto. Agora, sempre que você salvar uma alteração no arquivo, ele será recompilado automaticamente, sem precisar executar o comando manualmente.
// -------------------------------------------------------
// Exemplo prático: Usando WatchMode
// -------------------------------------------------------
const nome = "gui"; // Variável com tipo explícito
function blabla(n1) {
    // Função que recebe um número (`n1`) e retorna uma string
    return "O parâmetro era: " + n1;
}
// Chamando a função
console.log(blabla(12)); // Saída: O parâmetro era: 12
// -------------------------------------------------------
// Passo a passo para usar o WatchMode
// -------------------------------------------------------
// 1. Certifique-se de que o arquivo `script.ts` está salvo no seu projeto.
// 2. No terminal, execute o comando:
//    `tsc script.ts -w`
// 3. Faça alterações no arquivo `script.ts` (ex.: mudar o valor de `n1` na função `blabla`).
// 4. Observe no terminal que o TypeScript recompila automaticamente o arquivo para JavaScript.
// 5. O arquivo JavaScript gerado pode ser incluído no HTML ou executado diretamente com Node.js.
// Trabalhando com o watch mode no TypeScript e o arquivo tsconfig.json
// 1. Inicializando o arquivo de configuração do TypeScript
// ---------------------------------------------------------
// Para criar o arquivo de configuração do TypeScript (tsconfig.json), digite no terminal:
// tsc --init
// Isso irá gerar um arquivo chamado tsconfig.json, que serve para definir configurações do compilador.
// 2. Compilando o projeto com o arquivo tsconfig.json
// ---------------------------------------------------
// Após criar o tsconfig.json, basta usar o comando:
// tsc
// O TypeScript irá compilar todos os arquivos .ts do projeto, sem a necessidade de especificar manualmente cada arquivo.
// Ele também pode buscar arquivos em outras pastas.
// Nota: Por padrão, mesmo que existam erros nos arquivos TypeScript, o compilador ainda gera os arquivos .js.
// Isso pode ser ajustado no tsconfig.json.
// 3. Ajustando configurações no tsconfig.json
// -------------------------------------------
// 3.1 Excluindo arquivos da compilação
// Se você não deseja compilar certos arquivos, use a propriedade "exclude":
/*
    "exclude": [
//  "P4/script.ts", // Exclui um arquivo específico.
//  "*.dev.ts", // Exclui todos os arquivos que terminam c/ dev.ts.       */
//  "**/.dev.ts", // Exclui todos os arquivos .dev.ts de todas as pastas.
//  "node_modules" // Exclui a pasta node_modules.
// ] 
// 3.2 Incluindo arquivos específicos para compilar
// Para limitar os arquivos a serem compilados, use a propriedade "include":
/*
"include": [
  "P4/outro.ts",           // Inclui apenas esse arquivo.
  "P3/script.ts"           // Inclui outro arquivo de uma pasta diferente.
]
*/
// 4. Usando o watch mode
// -----------------------
// Para habilitar o modo de monitoramento, use o comando:
// tsc -w
// Esse comando monitora todos os arquivos do projeto, recompilando automaticamente quando alterações são detectadas.
// 5. Lidando com erros na compilação
// -----------------------------------
// No tsconfig.json, você pode configurar o TypeScript para não gerar arquivos .js se houver erros nos arquivos .ts.
// Isso evita gerar arquivos incompletos ou inválidos.
// Com essas configurações, seu ambiente de TypeScript estará organizado, flexível e eficiente!
//"Target" é a versao do arquivo JAVASCRIPT que o TS ira gerar
//trabalahndo com lib no TS, repare q o addeventlistener n sabe espeficicar todos elementos do HTML, entao usamos o as...
const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    console.log('clicou');
});
//Ou seja por padrao a LIB no tsconfig ja vem com varias predefinicoes do TS, ou seja digamos que tu so descomente, ele ja vai trazer varios erros, considerando isso, podemos adicionar elementos ou bibliotecas para dar suporte para o codigo TS., um delees e o proprio DOM que podemos adicionar dentro da LIB.
//outDir, no tsconfig basicamente diz para onde quer salvar o arquivo JS compilado, pode ate mesmo criar as pastas por la.
//rootDir , ja aqui eu  replico toda a estrutura de onde estiver a pasta que estou definindo para onde sera recriado os meus arquivos JS compilado.
//Removecomments, dessa forma remove os comentarios do codigo, entao fica menos bytes no arquivo é muito bom, pq os comentarios e util para nos.
