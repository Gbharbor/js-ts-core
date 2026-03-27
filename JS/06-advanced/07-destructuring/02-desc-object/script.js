// Exemplo de desconstrução de objetos e objetos aninhados em JavaScript
let pessoa = {
    nome: 'gui',
    idade: 90,
    sobrenome: 'porto',
    social: {
        facebook: 'portox',
        instagram: {
            url: '@gbharbor',
            follow: 30
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

// Atribuindo valores de 'pessoa' a variáveis específicas usando desconstrução
let { nome: pessoaNome, sobrenome, idade = 0, social: { instagram: { url: instagram, follow } } } = pessoa;
// 'pessoaNome' recebe 'nome', 'idade' recebe o valor padrão 0 se não existir em 'pessoa', 'instagram' e 'follow' são obtidos do objeto 'social.instagram'
console.log(pessoaNome, sobrenome, idade, instagram, follow);

// Desconstrução de objetos aninhados - duas formas de acessar 'facebook' diretamente
// Forma 1: Desconstrução simples dentro de 'pessoa.social'
let { facebook } = pessoa.social;
console.log(`Método (let { facebook } = pessoa.social;): ${facebook}`);

// Forma 2: Desconstrução em uma função para obter o nome completo
function pegarNomeCompleto(obj) {
    let nome = obj.nome;
    let sobrenome = obj.sobrenome;
    return `${nome} ${sobrenome}`;
}
console.log(pegarNomeCompleto(pessoa));

// Função com desconstrução direta nos parâmetros
// Aqui 'sobrenome' tem um valor padrão de 'barreto' (usado se 'sobrenome' não existir)
function pegarNomeCompleto1({ nome, sobrenome = "barreto", social: { instagram: { url: instagram } } }) {
    return `${nome} ${sobrenome} (Siga em ${instagram})`;
}
console.log(pegarNomeCompleto1(pessoa)); // Saída: "gui porto (Siga em @gbharbor)"

// Exemplo avançado de desconstrução em objetos aninhados com métodos
const data = {
    nome: {
        pessoa1: 'joao',
        pessoa2: 'pedro',
    },
    sobrenome: {
        pessoa1: 'silva',
        pessoa2: 'alcantra'
    },
    nomeCompleto: function() {
        return this.nome.pessoa2 + ' ' + this.sobrenome.pessoa1; // Concatena o nome e sobrenome de 'pessoa2' e 'pessoa1'
    }
};
console.log(data.nomeCompleto()); // Exibe o nome completo com 'pedro silva'