import math

def addmultiplenumbers(numbers):
    """Recibe una lista de números y devuelve su suma."""
    if not numbers:
        return 0
    return sum(numbers)

def multiplymultiplenumbers(numbers):
    """Recibe una lista de números y los multiplica consecutivamente."""
    if not numbers:
        return 0
    result = 1
    for num in numbers:
        result *= num
    return result

def isiteven(num):
    """Devuelve True si el número es un entero entero y par, False en caso contrario."""
    # Primero verificamos si conceptualmente es un entero (ej. 4.0 o 4)
    if num % 1 != 0:
        return False
    return int(num) % 2 == 0

def isitaninteger(num):
    """Devuelve True si el número es un entero (o equivalente float como 5.0), False si tiene decimales."""
    # isinstance(num, int) por sí solo fallaría con un float como 5.0 que sí es un entero de valor.
    # Por lo tanto, usamos el operador módulo para verificar si no tiene residuo decimal.
    return num % 1 == 0

def main():
    print("Hello learners!")
    print("Calculadora Interactiva")
    
    # Interacción con el usuario para ingresar números
    try:
        entrada = input("Ingresa números separados por comas (,) para sumar y multiplicar: ")
        # Convertimos la entrada de texto en una lista de números reales (floats)
        lista_numeros = [float(x) for x in entrada.split(",") if x.strip() != ""]
        
        if lista_numeros:
            suma_total = addmultiplenumbers(lista_numeros)
            producto_total = multiplymultiplenumbers(lista_numeros)
            
            print(f"\nResultados para la lista {lista_numeros}:")
            print(f"-> Suma total: {suma_total}")
            print(f"-> Multiplicación total: {producto_total}")
            
# Probamos las funciones de validación con el primer número ingresado

            primer_num = lista_numeros[0]
            print(f"\nAnálisis del primer número ({primer_num}):")
            print(f"¿Es un número entero?: {isitaninteger(primer_num)}")
            print(f"¿Es un número par entero?: {isiteven(primer_num)}")
        else:
            print("No ingresaste ningún número válido.")
            
    except ValueError:
        print("Error: Por favor ingresa únicamente números válidos.")

if __name__ == "__main__":
    main()
  