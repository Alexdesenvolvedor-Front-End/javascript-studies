


// Pedir o usuário para digitar uma nota
let n1 = prompt("Digite uma nota: ");


// Conveter o número para float
n1 = parseFloat(n1);


// Pedir o usuário para dititar mas uma nota
let n2 = prompt("Digite mas uma nota: ");


// Converter o número para float
n2 = parseFloat(n2);


// Mostrar na tela aprovado se a média for maior que 5 senão reprovado

media = (n1 + n2) / 2;

console.log(``)

if (media > 5) {
    console.log("Aluno  aprovado!");

} else {
    console.log("Aluno reprovado!");
}

