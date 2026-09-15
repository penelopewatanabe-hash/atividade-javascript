class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarProduto() {
        console.log("Produto:", this.nome);
        console.log("Preço:", this.preco);
    }
}

const produto = new Produto("Notebook", 3500);

produto.mostrarProduto();
