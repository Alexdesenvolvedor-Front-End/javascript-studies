


//  Peça a idade da pessoa, menor que 16 não pode votar, entre 16 e 17 voto opcional 18 ou mais voto obrigatório


let idade = prompt("Digite uma idade: ");
idade = parseInt(idade);

if (idade < 16) {
    console.log("Menor de idade, não pode votar!");
} else if (idade >= 16 && idade <= 17) {
    console.log("Voto opcional!");

} else if (idade >= 18) {
    console.log("Voto obrigatório!");
}