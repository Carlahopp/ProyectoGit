// 1. Mostrar del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("------------------------");

// 2. Mostrar del 10 al 1 (inverso)
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("-----------------------------");

// 3. Mostrar pares del 1 al 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) continue;
  console.log(i,"es par");
}
console.log("-------------------------");

// 4. Mostrar impares del 1 al 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) continue;
  console.log(i, "es impar");
}
console.log("----------------------------");

// 5. Generar tabla de multiplicar
let numero = 8; 
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
console.log("-----------------------------");

// 6. Mostrar "Fizz" en múltiplos de 3
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i,"Fizz");
  } else {
    console.log(i);
  }
}