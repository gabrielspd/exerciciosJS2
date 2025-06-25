function exec07() {
const produtos = [
    { nome: "caneta", preco: 3 },
    { nome: "livro", preco: 10 },
    { nome: "borracha", preco: 1 }
];

const produtosOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco);

const nomesOrdenados = produtosOrdenados.map(produto => produto.nome);

return nomesOrdenados;
}
