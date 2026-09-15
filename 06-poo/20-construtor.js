class Aluno {
    constructor(nome, curso) {
        this.nome = nome;
        this.curso = curso;
    }

    mostrarAluno() {
        console.log("Nome:", this.nome);
        console.log("Curso:", this.curso);
    }
}

const aluno = new Aluno("Ingrid", "Banco de dados");

aluno.mostrarAluno();
