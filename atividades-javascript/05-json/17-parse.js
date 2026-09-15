const dadosJSON = '{"nome":"Carlos","curso":"Node.js"}';

const aluno = JSON.parse(dadosJSON);

console.log("Nome:", aluno.nome);
console.log("Curso:", aluno.curso);
