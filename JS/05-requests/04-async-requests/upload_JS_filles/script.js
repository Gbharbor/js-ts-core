// Função assíncrona para enviar um arquivo ao servidor
async function enviar() {
    try {
        // Seleciona o primeiro arquivo do input com o id 'arquivo'
        let arquivo = document.getElementById('arquivo').files[0];

        // Cria um novo objeto FormData para compilar as informações do upload
        let body = new FormData();

        // Adiciona um campo de título no FormData, que pode ser um metadado ou outra informação relevante
        body.append('title', 'bla bla bla');

        // Adiciona o arquivo selecionado ao FormData com o nome 'arquivo', para ser interpretado pelo servidor
        body.append('arquivo', arquivo);

        // Realiza a requisição usando fetch, que envia o arquivo ao servidor
        let req = await fetch('https://www.meusite.com.br/upload', { // Exemplo de URL, substitua pela sua
            method: 'POST', // O método POST é ideal para envios de dados e uploads
            body: body, // O corpo da requisição é o FormData com o arquivo e os dados adicionais

            // Especifica o cabeçalho da requisição com multipart/form-data, que é o tipo adequado para uploads
            headers: {
                'Content-Type': 'multipart/form-data' // Este cabeçalho indica que é um envio de formulário com arquivos
            }
        });

        // Verifica se a requisição foi bem-sucedida e exibe a mensagem correspondente
        if (req.ok) {
            console.log("Upload concluído com sucesso");
        } else {
            console.error("Erro no upload: ", req.status);
        }
    } catch (error) {
        // Captura e exibe qualquer erro que ocorrer durante a requisição
        console.error("Erro ao realizar a requisição:", error);
        alert("Ocorreu um erro ao enviar o arquivo.");
    }
}