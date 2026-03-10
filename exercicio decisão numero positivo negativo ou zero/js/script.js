

// Descrição: Peça para o usuário digitar um número e informe se ele é positivo, negativo ou zero.


  let n1 = prompt("Digite um número: ");
  n1 = parseFloat(n1);

  if(n1 > 0 ){
    console.log("Esse número é positivo.");

  }else if(n1 < 0){
    console.log("Esse número é negativo.");

  }else{
    console.log("Esse número é 0");
  }