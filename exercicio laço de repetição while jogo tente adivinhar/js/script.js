


// Exercicio Adivinhe o número

// Crie um jogo onde: O usuário tenta adivinhar enquanto ele errar, o programa continua pedindo o número
// Quando acertar, mostre , parabéns você acertou.


let numeroSecreto = 10;
let tentativas = 0;

let n1 = parseInt(prompt("Digite um número: "));

tentativas++

while (n1 !== numeroSecreto) {
    tentativas++
    n1 = parseInt(prompt("Digite outro número: "));

}
console.log(`Parabéns você acertou, o número secreto é => ${numeroSecreto}`);
console.log(`Números de tentativas => ${tentativas}`);