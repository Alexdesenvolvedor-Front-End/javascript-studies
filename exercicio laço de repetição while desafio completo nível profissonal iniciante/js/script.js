


// Desafio Completo (nível profissional iniciante)

// Somar os números digitados
// Contar quantos números foram digitados
// Calcular a média
// Validar se o usuário digitou o número válido
// Parar quando o usuário digitar o número 0

let soma = 0;
let contador = 0;
let media = 0;



let n1 = prompt("Digite um número: ");
n1 = parseInt(n1);


while (n1 !== 0){
    if(isNaN(n1)){
        console.log(`Nâo é um número valido!`)
    }else{
        soma+= n1;
        contador++;
    }

    n1 = prompt("Digite outro número: ");
    n1 = parseInt(n1);

}

if(contador > 0){
    media = soma / contador;
}
