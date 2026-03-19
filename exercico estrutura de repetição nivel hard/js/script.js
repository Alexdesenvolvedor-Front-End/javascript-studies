

// Mostre os números de 1 até 50, mas: se for múltiplo de 3, mostre "Fizz" se for múltiplo de 5, mostre "Buzz" 
// se for múltiplo de 3 e 5, mostre "FizzBuzz"



for (let i = 1; i < 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz ${i}`);

    } else if (i % 3 === 0) {
        console.log(`Fizz ${i}`);
    } else if (i % 5 === 0) {
        console.log(`Buzz ${i}`);
    } else {
        console.log(`${i}`);
    }
}




