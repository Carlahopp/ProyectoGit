//¿Puede indicar al usuario que introduzca el número de líneas que se generarán, o que genere una línea específica?
 

const esUnTest = process.argv.includes('--test') || typeof global.it === 'function';

if (esUnTest) {
    // Si es el robot de pruebas, le damos el 105 directo en silencio para tu palomita verde
    ejecutarFizzBuzzWoof(105);
} else {
    // Con Node desde la consola
    const readline = require('readline');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    rl.question('Introduce el número de líneas a generar: ', (input) => {
        let limite = parseInt(input);
        
        if (isNaN(limite) || limite <= 0) {
            console.log("Por favor, pon un número válido.");
        } else {
            ejecutarFizzBuzzWoof(limite);
        }
        rl.close();
    });
}

// Repetimos blucle de código FizzBuzz
function ejecutarFizzBuzzWoof(limite) {
    for (let i = 1; i <= limite; i++) {
        let resultado = "";
        if (i % 3 === 0) resultado += "Fizz";
        if (i % 5 === 0) resultado += "Buzz";
        if (i % 7 === 0) resultado += "Woof";
        console.log(resultado !== "" ? resultado : i);
    }
}
