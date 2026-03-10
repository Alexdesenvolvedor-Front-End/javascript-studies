



// Verificar idade pra votar

// Descrição: Peça o usuário digitar a idade e verifique se ele pode votar (>16).
// Dica Use if e else
// Exemplo esperado:
// Entrada: 18 - Saída "Você pode votar"
// Entrada: 14 - Saída "Você não pode votar"



let nota1 = prompt("Digite a sua idade: ");
nota1 = parseInt(nota1);

if(nota1 >= 18){
    console.log(`Você é maior de idade e pode votar.`);
}else{
    console.log(`Você não pode votar porque e menor de idade.`);
}