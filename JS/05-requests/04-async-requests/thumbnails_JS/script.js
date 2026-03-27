// Função para exibir a imagem usando URL.createObjectURL
function mostrar() {
    // Seleciona o primeiro arquivo da entrada de arquivo com id 'imagem'
    let imagem = document.getElementById('imagem').files[0];
    console.log(imagem); // Exibe o arquivo no console

    // Cria um elemento de imagem ('<img>') dinamicamente
    let img = document.createElement('img');
    
    // Define o atributo 'src' usando URL.createObjectURL, que cria uma URL temporária para o arquivo selecionado
    img.src = URL.createObjectURL(imagem);
    
    // Define a largura da imagem para 200 pixels para exibir como uma miniatura (thumbnail)
    img.width = 200;
    
    // Adiciona a imagem criada à área com id 'area'
    document.getElementById('area').appendChild(img);
}

// Função para exibir a imagem usando FileReader (modo assíncrono)
function mostrar1() {
    // Instancia um objeto FileReader, que permite ler o conteúdo do arquivo de forma assíncrona
    let reader = new FileReader();
    
    // Seleciona o primeiro arquivo da entrada de arquivo com id 'imagem1'
    let imagem1 = document.getElementById('imagem1').files[0];

    // Define o callback para o evento 'onloadend', disparado ao final da leitura
    reader.onloadend = function() {
        // Cria um elemento de imagem ('<img>') dinamicamente
        let img1 = document.createElement('img');
        
        // Define o atributo 'src' da imagem como o resultado da leitura, que será uma URL do tipo Data URL
        img1.src = reader.result;
        
        // Define a largura da imagem para 200 pixels (thumbnail)
        img1.width = 200;
        
        // Adiciona a imagem criada à área com id 'area1'
        document.getElementById('area1').appendChild(img1);
    }

    // Verifica se existe um arquivo selecionado antes de iniciar a leitura
    if (imagem1) {
        reader.readAsDataURL(imagem1); // Inicia a leitura do arquivo como Data URL
    } else {
        console.error("Nenhum arquivo selecionado"); // Exibe erro se nenhum arquivo for selecionado
    }
}

/*
Explicações adicionais:

1. **URL.createObjectURL**:
   - Cria uma URL temporária, associando-a ao objeto `File` para que o navegador possa exibir a imagem.
   - Ideal para exibir a imagem rapidamente, pois não precisa carregar o conteúdo inteiro do arquivo.

2. **FileReader**:
   - O `FileReader` é assíncrono, então usa um evento `onloadend` para definir o que deve acontecer após o término da leitura do arquivo.
   - `readAsDataURL`: Lê o conteúdo do arquivo e o converte para um Data URL (uma string base64).
   - Permite maior controle e pode ser usado para pré-processamento do conteúdo do arquivo antes da exibição.

3. **Ajuste de largura**:
   - Definir `img.width = 200` ajusta a imagem para 200 pixels de largura, criando uma exibição em formato de miniatura (thumbnail).
*/