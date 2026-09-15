#Laboratorio: Crear una calculadora

# Solicitar los dos primeros números al usuario de forma secuencial
num1 = float(input("Introduce el primer número: "))
num2 = float(input("Introduce el segundo número: "))

# Suma
suma_inicial = num1 + num2
print(suma_inicial)


# FASE 2: Operaciones complementarias:

print("\n--- Características Adicionales (Tiempo Extra) ---")

# 1. Resta
resta = num1 - num2
multiplicacion = num1 * num2

# Division y multiplicación
if num2 != 0:
    division = num1 / num2
    modulo = num1 % num2
else:
    division = "Error: División por cero"
    modulo = "Error: División por cero"

print(f"Resta ({num1} - {num2}): {resta}")
print(f"Multiplicación ({num1} * {num2}): {multiplicacion}")
print(f"División ({num1} / {num2}): {division}")
print(f"Módulo ({num1} % {num2}): {modulo}")


# 2. Operación con más de dos números
print("\nElige una operación para realizar con dos nuevos números:")
print("1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Módulo")
opcion = input("Introduce el número de la opción (1-5): ")

if opcion in ['1', '2', '3', '4', '5']:
    n_a = float(input("Introduce el primer número para la operación elegida: "))
    n_b = float(input("Introduce el segundo número para la operación elegida: "))
    
    if opcion == '1':
        print(f"Resultado: {n_a + n_b}")
    elif opcion == '2':
        print(f"Resultado: {n_a - n_b}")
    elif opcion == '3':
        print(f"Resultado: {n_a * n_b}")
    elif opcion == '4':
        print(f"Resultado: {n_a / n_b}" if n_b != 0 else "Error: División por cero")
    elif opcion == '5':
        print(f"Resultado: {n_a % n_b}" if n_b != 0 else "Error: División por cero")
else:
    print("Opción no válida.")


# 3. Tomar 3 números y sumarlos
print("\nSuma de 3 números:")
n1 = float(input("Introduce el primer número: "))
n2 = float(input("Introduce el segundo número: "))
n3 = float(input("Introduce el tercer número: "))
print(f"La suma de los tres números es: {n1 + n2 + n3}")


# 4. Permitir mezclar operaciones libres utilizando la función nativa eval()
print("\nMezclar operaciones de forma libre (Ejemplo: 2 + 4 - 3 o 4 * 5 + 1 / 3):")
expresion = input("Introduce la operación completa que deseas calcular: ")

try:
    # eval() procesa la cadena de texto directamente respetando la jerarquía matemática
    resultado_libre = eval(expresion)
    print(f"El resultado de la expresión es: {resultado_libre}")
except Exception as e:
    print("Expresion matemática inválida. Asegúrate de usar los símbolos correctos (+, -, *, /).")