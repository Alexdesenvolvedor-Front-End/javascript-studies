


// Exercicio de calculadora simples

// Pedir ao usuário para digitar dois números, escolher qual calculo vai fazer ex: +, *, /, - e mostra o resultado na tela.


let n1 = prompt("Digite um número: ");
n1 = parseInt(n1);

let operacao = prompt("Escolha qual operação você vai fazer (+ * / -)");

let n2 = prompt("Digite outro número: ");
n2 = parseInt(n2);



let resultado = n1 + n2;


if (operacao == "+") {
    resultado = n1 + n2;
    console.log(`Total: ${resultado}`);
} else if (operacao == "*") {
    resultado = n1 * n2;
    console.log(`Total: ${resultado}`);
} else if (operacao == "/") {
    resultado = n1 / n2;
    console.log(`Total: ${resultado}`);
} else if (operacao == "-") {
    resultado = n1 - n2;
    console.log(`Total: ${resultado}`);
}





