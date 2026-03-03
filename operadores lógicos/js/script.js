


// ! NÃO (NOT)
// && E (AND)
// || OU (OR)


// Pedir para o usuário digitar dois números e mostrar uma mensagem informando se foi aprovado ou não.
//  A nota de corte é 5, contudo se qualquer uma das notas for zero, reprova
// automaticamente.



// Ditite a primeira nota 
let nota1 = prompt("Digite a sua nota informada no boletim: ");



// Converta para float
nota1 = parseFloat(nota1);




// Digite a segunda nota
let nota2 = prompt("Digite a segunda nota informada no boletim: ");



// Converta para float
nota2 = parseFloat(nota2);



media = (nota1 + nota2) / 2;


if (media > 5 && nota1 > 0 && nota2 > 0) {
    console.log("Parabéms você foi aprovado!");

} else {
    console.log("Você foi reprovado!");
}






