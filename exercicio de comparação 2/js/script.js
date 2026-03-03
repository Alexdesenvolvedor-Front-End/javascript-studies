







// Fazer o jogador 1 digitar um número
let jogador1 = prompt("Jogador1 favor digitar um número: ");



// Converter para número inteiro
jogador1 = parseInt(jogador1);


// Fazer o jogador 2 digitar outro número
let jogador2 = prompt("Jogador2 favor digitar outro número: ");



// Converter para número inteiro
jogador2 = parseInt(jogador2);


// Se forem iguais mostrar mensagem de empate
if (jogador1 === jogador2) {
    console.log("Vocês empataram!");
} else {

    // Sortear um número entre 0 e 1

    let sorteado = parseInt(Math.random() * 2);
    console.log(`Sorteado: ${sorteado}`);


    // Se o número sorteado for 0, ganha quem escolher o MENOR
    if (sorteado === 0 && jogador1 < jogador2 || sorteado === 1 && jogador1 > jogador2) {
        console.log("Ganhou o jogador 1!");
    } else {
        console.log("Ganhou o jogador 2");

        // Se o número sorteado for 1, ganha quem escolher o numero MAIOR
    }


}






