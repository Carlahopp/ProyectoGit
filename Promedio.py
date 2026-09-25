#Práctica obtener el promedio de tres calificaciones:
import datetime
# Obtener y formatear la fecha del día de hoy
fecha_actual = datetime.datetime.now().strftime("%d/%m/%Y")

print("--- Obtener Promedio de Calificaciones (Rango válido: 0 a 10) ---\n")
print(f"Fecha de consulta: {fecha_actual}\n")

# 1. Obtener las 3 calificaciones del usuario de forma secuencial
calificacion1 = float(input("Introduce la calificación 1: "))
calificacion2 = float(input("Introduce la calificación 2: "))
calificacion3 = float(input("Introduce la calificación 3: "))

# 2. Validación con 'if': Verificar que todas las notas estén entre 0 y 10
if calificacion1 < 0 or calificacion1 > 10:
    print("Error: La calificación 1 es inválida. Debe estar entre 0 y 10.")
elif calificacion2 < 0 or calificacion2 > 10:
    print("Error: La calificación 2 es inválida. Debe estar entre 0 y 10.")
elif calificacion3 < 0 or calificacion3 > 10:
    print("Error: La calificación 3 es inválida. Debe estar entre 0 y 10.")
else:
    # 3. Si todas las notas son válidas, se calcula el promedio respetando BODMAS
    promedio = (calificacion1 + calificacion2 + calificacion3) / 3
    print(f"\n¡Validación exitosa!")
    print(f"El promedio de las 3 calificaciones es: {promedio:.2f}")