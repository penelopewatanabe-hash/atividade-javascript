const aluno = {
    nome: "Ana",
    curso: "JavaScript"
};

const novoAluno = {
    ...aluno,
    idade: 16
};

console.log(novoAluno);
