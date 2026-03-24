

// Peça ao usuário para digitar números e vá somando todos eles.
//  O programa deve parar quando o usuário digitar 0.





let soma = 0;

let n1 = prompt("Digite um número: ")
n1 = parseInt(n1);

while (n1 !== 0) {
    soma += n1;

    n1 = prompt("Digite outro número: ");
    n1 = parseInt(n1);
}

console.log(`Total do calculo: ${soma}`);

