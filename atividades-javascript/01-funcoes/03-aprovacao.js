function verificarAprovacao(nota) {
    if (nota >= 6) {
        return "Aluno aprovado";
    } else {
        return "Aluno reprovado";
    }
}

console.log(verificarAprovacao(7));
