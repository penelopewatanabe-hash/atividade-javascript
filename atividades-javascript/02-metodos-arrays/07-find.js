const produtos = [
    { id: 1, nome: "Notebook" },
    { id: 2, nome: "Mouse" },
    { id: 3, nome: "Teclado" }
];

const produto = produtos.find((item) => item.id === 2);

console.log(produto);
