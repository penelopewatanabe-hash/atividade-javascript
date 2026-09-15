const pessoa = {
    nome: "Matheus",

    apresentar() {
        console.log("Olá, meu nome é", this.nome);
    }
};

pessoa.apresentar();
