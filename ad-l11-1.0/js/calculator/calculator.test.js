const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
// Tarea 1: Implementar 2 pruebas unitarias para la función multiply()
test('multiply 4 * 5 to equal 20', () => {
    expect(calculator.multiply(4, 5)).toBe(20);
});

test('multiply 6 * -3 to equal -18', () => {
    expect(calculator.multiply(6, -3)).toBe(-18);
});

// Tarea 1: Implementar 2 pruebas unitarias para la función divide()
test('divide 10 / 2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 5 / 2 to equal 2.5', () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
});

// Tarea 3: Escribir una prueba unitaria para verificar la función divide() pasando 0 como segundo argumento
test('divide by zero should throw an error', () => {
    expect(() => {
        calculator.divide(10, 0);
    }).toThrow("No se puede dividir por cero");
});