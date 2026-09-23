for (let i = 1; i <= 105; i++) {
    // 1. Primero revisamos que cumpla con FizzBuzz (múltiplo de 3 y de 5)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // 2. Si no, revisamos si solo es múltiplo de 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // 3. Si no, revisamos si solo es múltiplo de 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // 4. Si no cumple ninguna de las anteriores, imprimimos el número
    else {
        console.log(i);
    }
}