import datetime
#Minicalculadora 

fecha_actual = datetime.datetime.now().strftime("%d/%m/%Y")
print("--- RETO: MINI CALCULADORA MODULAR ---")
print(f"Fecha de ejecución: {fecha_actual}\n")


def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    # Validación con 'if' para evitar que el programa se rompa por división entre cero
    if b == 0:
        return "Error: No se puede dividir entre cero"
    return a / b

def potencia(base, exponente):
    return base ** exponente

#Prueba de funciones:
print("Resultados de las pruebas automáticas:")

# Probando las 4 funciones básicas requeridas:
print(f"Suma (10 + 5)          = {sumar(10, 5)}")
print(f"Resta (10 - 5)         = {restar(10, 5)}")
print(f"Multiplicación (10 * 5) = {multiplicar(10, 5)}")
print(f"División (10 / 5)      = {dividir(10, 5)}")
print(f"División inválida (10 / 0) = {dividir(10, 0)}")
print(f"Potencia (10 ** 5)      = {potencia(10, 5)}")


