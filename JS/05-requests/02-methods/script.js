// URL para a API JSON Placeholder (https://jsonplaceholder.typicode.com/posts)
// Quando fazemos uma requisição, podemos observar no DevTools (em "Network") o método utilizado, que no caso do GET é o método padrão.
// Os principais métodos de requisição HTTP incluem:
// - GET: Recupera informações
// - POST: Insere ou envia dados
// - PUT: Altera informações existentes
// - DELETE: Remove dados

// Exemplo de requisição GET
function clicou() {
    // Faz uma requisição GET para a URL especificada
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // Transforma a resposta em um objeto JavaScript usando JSON
            return response.json();
        })
        .then((json) => {
            // Exibe o título do primeiro post em um alerta
            alert(`Título do primeiro post: ${json[0].title}`);
        })
        .catch(() => {
            // Em caso de erro, exibe uma mensagem de alerta
            alert("Houve um problema na requisição");
        });
}
// Adiciona o evento de clique para acionar a função 'clicou'
document.querySelector('#botao').addEventListener('click', clicou);

// Exemplo de requisição POST
// Vamos fazer uma requisição para inserir um novo post na mesma URL, mas usando o método POST
function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Define o método como POST para inserir dados
        headers: {
            'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON para que o servidor interprete corretamente os dados
        },
        // O body define o conteúdo da requisição, que é convertido para JSON
        body: JSON.stringify({
            title: 'Título de teste', // Título do novo post
            body: 'Corpo de teste', // Corpo do novo post
            userId: 2 // Define o autor (usuário) do post
        })
    })
    .then((response) => {
        // Transforma a resposta em um objeto JavaScript usando JSON
        return response.json();
    })
    .then((json) => {
        // Exibe os dados do post criado no console
        console.log("Dados do post criado:", json);
    });
}
// Adiciona o evento de clique para acionar a função 'inserir'
document.querySelector('#inserir').addEventListener('click', inserir);

// Explicação dos Métodos HTTP e Status Codes:
// - GET: Usado para buscar dados sem alterar o estado do servidor. No exemplo, busca posts do servidor.
// - POST: Usado para enviar dados e criar um novo recurso. O exemplo acima cria um novo post.
// - Na aba Network do DevTools, a seção Payload exibe o conteúdo enviado na requisição, que no caso de POST inclui o JSON enviado.
// - Códigos de status:
//    - 200: Requisição bem-sucedida (para GET, indica que os dados foram recuperados com sucesso).
//    - 201: Recurso criado com sucesso (aparece no POST, indicando que o post foi adicionado com sucesso).
//    - Outros status: Indicam erros ou informações adicionais, como 404 para "Não encontrado" ou 500 para "Erro do servidor".