


// Peça o valor de uma compra, se for maior que 100R$, aplique 10% de desconto se não mostre o valor na tela




let valor = prompt("Digite um valor: ");
valor = parseFloat(valor);

if (valor >= 100) {
    let desconto = valor * 10 / 100;
    let resultado = valor - desconto;
    console.log(`Valor total da compra com desconto:  R$ ${resultado}`);


} else {
    console.log(`Valor total da compra sem desconto R$ ${valor}`)
}

