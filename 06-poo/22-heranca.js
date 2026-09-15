class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log("Nome:", this.nome);
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("Au au!");
    }
}

const cachorro = new Cachorro("Rex");

cachorro.apresentar();
cachorro.latir();
