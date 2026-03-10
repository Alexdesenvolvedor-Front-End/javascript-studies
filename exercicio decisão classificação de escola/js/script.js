


// Descrição: Peça uma nota do aluno (0 a 100 e exiba)

// 90 a 100 - A
// 80 a 89 - B
// 70 79 - C
// 60 a 69 - D


let nota = prompt("Digite uma nota: ");
nota = parseFloat(nota);

if (nota >= 90) {
    console.log("Resultado A");
} else if (nota >= 80) {
    console.log("Resultado B");
} else if (nota >= 70) {
    console.log("Resultado C")
} else if (nota >= 60) {
    console.log("Resultado D");
} else {
    console.log("Resultado F");
}