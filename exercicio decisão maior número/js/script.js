


// Peça dois  números e mostre qual deles é o maior, se forem iguais informe que são iguais


let n1 = prompt("Digite um número: ");
n1 = parseInt(n1);


let n2 = prompt("Digite outro número: ");
n2 = parseInt(n2);


if (n1 > n2) {
    console.log("Primeiro número é o maior!");
} else if (n2 > n1) {
    console.log("Segundo número é o maior!");

} else if (n1 == n2) {
    console.log("Esse número é igual!");
}