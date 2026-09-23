for (let i = 1; i <= 105; i++) {
    let resultado = "";

    // 1. Si es múltiplo de 3, agregamos "Fizz" 
    if (i % 3 === 0) {
        resultado += "Fizz";
    }

    // 2. Si es múltiplo de 5, agregamos "Buzz" 
    if (i % 5 === 0) {
        resultado += "Buzz";
    }

    // 3. Si es múltiplo de 7, agregamos "Woof" 
    if (i % 7 === 0) {
        resultado += "Woof";
    }

    // 4. Si no es ninguna de las anteriores que imprima el "número"
    if (resultado !== "") {
        console.log(resultado);
    } else {
        console.log(i);
    }
}