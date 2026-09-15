class Animal {
    falar() {
        console.log("O animal fez um som.");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("O cachorro latiu.");
    }
}

class Gato extends Animal {
    falar() {
        console.log("O gato miou.");
    }
}

const cachorro = new Cachorro();
const gato = new Gato();

cachorro.falar();
gato.falar();
