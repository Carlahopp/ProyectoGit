//Continuación de FizzBuzz tarea 2

for (let i = 1; i <= 105; i++) {
    // Si el remanente de dividir entre 3 es cero, es múltiplo de 3
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}