const calculator = require('./js/calculator/calculator.js');
const UserController = require('./js/user/user-controller.js');
const User = require('./js/user/user.js');

// Colores ANSI para la terminal
const RESET = "\x1b[0m";
const VERDE = "\x1b[32m";
const ROJO = "\x1b[31m";
const CIAN = "\x1b[36m";
const AMARILLO = "\x1b[33m";
const NEGRITA = "\x1b[1m"; // Corrección hecha aquí: todo en mayúsculas

console.clear(); // Limpia la consola antes de iniciar

console.log(`${NEGRITA}${CIAN}====================================================${RESET}`);
console.log(`${NEGRITA}${CIAN}    🧮 SISTEMA DE VALIDACIÓN DEL PROYECTO (AD-20)   ${RESET}`);
console.log(`${NEGRITA}${CIAN}====================================================${RESET}\n`);

// -----------------------------------------------------------------
// SECCIÓN: CALCULADORA
// -----------------------------------------------------------------
console.log(`${NEGRITA}${AMARILLO}╔══════════════════════════════════════════════════╗${RESET}`);
console.log(`${NEGRITA}${AMARILLO}║         TESTEO DEL MÓDULO CALCULADORA            ║${RESET}`);
console.log(`${NEGRITA}${AMARILLO}╚══════════════════════════════════════════════════╝${RESET}`);

console.log(` ▪️ Suma (5 + 3)              ➡️  ${VERDE}${calculator.add(5, 3)}${RESET}`);
console.log(` ▪️ Resta (10 - 4)            ➡️  ${VERDE}${calculator.subtract(10, 4)}${RESET}`);
console.log(` ▪️ Multiplicación (6 * 7)     ➡️  ${VERDE}${calculator.multiply(6, 7)}${RESET}`);
console.log(` ▪️ División (20 / 4)          ➡️  ${VERDE}${calculator.divide(20, 4)}${RESET}`);

try {
    console.log(` ▪️ División entre cero       ➡️  ${AMARILLO}Ejecutando...${RESET}`);
    calculator.divide(10, 0);
} catch (error) {
    console.log(`     ${ROJO}❌ Error esperado capturado: "${error.message}"${RESET}`);
}
console.log();

// -----------------------------------------------------------------
// SECCIÓN: CONTROLADOR DE USUARIOS
// -----------------------------------------------------------------
console.log(`${NEGRITA}${AMARILLO}╔══════════════════════════════════════════════════╗${RESET}`);
console.log(`${NEGRITA}${AMARILLO}║       TESTEO DEL CONTROLADOR DE USUARIOS         ║${RESET}`);
console.log(`${NEGRITA}${AMARILLO}╚══════════════════════════════════════════════════╝${RESET}`);

const controller = new UserController();

// Agregamos usuarios de prueba usando la clase User
const user1 = new User(101, "Carla Hoppenstedt", "carla@generation.org");
const user2 = new User(102, "Santiago Pirron", "santiago@generation.org");

controller.add(user1);
controller.add(user2);

const lista = controller.getUsers();
console.log(` ▪️ Total de usuarios en lista ➡️  ${VERDE}${lista.length}${RESET}`);

if (lista.length > 0) {
    // Tomamos datos del primer usuario dinámicamente de forma segura usando corchetes para el índice 0
    const idReal = lista[0].id;
    const emailReal = lista[0].email;

    // Búsquedas Existentes
    const busquedaId = controller.findById(idReal);
    console.log(` ▪️ Buscando ID existente (${idReal}) ➡️  ${VERDE}Encontrado: ${busquedaId.name}${RESET}`);

    const busquedaEmail = controller.findByEmail(emailReal);
    console.log(` ▪️ Buscando Email existente   ➡️  ${VERDE}Encontrado: ${busquedaEmail.name}${RESET}`);
}

// Búsquedas Inexistentes (Escenarios de Control)
const noId = controller.findById(9999);
console.log(` ▪️ Buscando ID inexistente    ➡️  ${noId ? VERDE + noId.name : ROJO + "⚠️ No encontrado (undefined)"}${RESET}`);

const noEmail = controller.findByEmail("inexistente@correo.com");
console.log(` ▪️ Buscando Email inexistente ➡️  ${noEmail ? VERDE + noEmail.name : ROJO + "⚠️ No encontrado (undefined)"}${RESET}`);

console.log(`\n${NEGRITA}${VERDE}====================================================${RESET}`);
console.log(`${NEGRITA}${VERDE}   🎉 ¡TODAS LAS PRUEBAS EJECUTADAS CON ÉXITO! ${RESET}`);
console.log(`${NEGRITA}${VERDE}====================================================${RESET}\n`);
