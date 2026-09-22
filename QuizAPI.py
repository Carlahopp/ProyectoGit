import requests
import html

def trivia_fetch(num):
    """Esta función obtiene las preguntas en tiempo real desde la API externa."""
    url = f"https://opentdb.com/api.php?amount={num}&type=multiple"
    try:
        response = requests.get(url)
        trivia = response.json()
        return trivia
    except Exception:
        # Fallback seguro si no hay conexión a internet o la API falla
        return {"results": []}

def main():
    print("¡Bienvenido al Quiz de Trivia Dinámico desde la API!")    
    print("==================================================\n")

    # CAMBIO AQUÍ: Eliminamos el input e indicamos que el total SIEMPRE sea 10
    cantidad = 10
    print(f"Iniciando el cuestionario de {cantidad} preguntas...\n")
    
    # Petición real a internet mandando el número 10
    datos_api = trivia_fetch(cantidad)
    preguntas = datos_api.get("results", [])

    if not preguntas:
        print("No se pudieron obtener preguntas en este momento.")
        return

    puntaje = 0

    # Iteramos dinámicamente sobre las 10 preguntas que devolvió la API
    for i, elemento in enumerate(preguntas, start=1):
        # html.unescape limpia caracteres especiales de internet como &#039; o &quot;
        pregunta_limpia = html.unescape(elemento["question"])
        resp_correcta = html.unescape(elemento["correct_answer"])
        
        # Mezclamos las opciones de la API (la correcta y las incorrectas)
        opciones_incorrectas = [html.unescape(op) for op in elemento["incorrect_answers"]]
        todas_opciones = opciones_incorrectas + [resp_correcta]
        todas_opciones.sort()  # Alfabético para que la respuesta correcta cambie de lugar

        print(f"Pregunta {i}: {pregunta_limpia}")
        
        # Mapeamos las letras A, B, C, D a las opciones mezcladas
        letras = ["A", "B", "C", "D"]
        mapeo_opciones = {}
        
        for letra, opcion in zip(letras, todas_opciones):
            print(f"  {letra}) {opcion}")
            mapeo_opciones[letra] = opcion
            if opcion == resp_correcta:
                letra_correcta = letra

        respuesta_usuario = input("Tu respuesta (A, B, C o D): ").strip().upper()
        
        if respuesta_usuario == letra_correcta:
            print("¡Correcto!\n")
            puntaje += 1
        else:
            print(f"Incorrecto. La respuesta correcta era: {letra_correcta}) {resp_correcta}.\n")

    print(f"¡Has terminado el quiz! Tu puntaje final es: {puntaje}/{len(preguntas)}")

if __name__ == "__main__":
    main()