class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }
}

const pessoa = new Pessoa("Ana");

console.log(pessoa.nome);

pessoa.nome = "Maria";

console.log(pessoa.nome);
