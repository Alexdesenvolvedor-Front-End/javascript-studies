

// Descrição: Peça três números ao usuário e informe qual deles é o maior


let n1 = prompt("Digite um número: ");
n1 = parseInt(n1);

let n2 = prompt("Digite outro número: ");
n2 = parseInt(n2);

let n3 = prompt("Digite mas um número: ");
n3 = parseInt(n3);


if (n1 > n2 && n1 > n3) {
    console.log("Então o númeo 1 é o maior.");

} else if (n2 > n3 && n2 > n1) {
    console.log("Então o número 2 é o maior.");
} else {
    console.log("Então o númeo 3 é o maior.");
}