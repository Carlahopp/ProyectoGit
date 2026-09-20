def trivia_fetch(num):
    """Esta función tomará un número entero como entrada para devolver un diccionario de datos de ese número."""
    # Banco de datos de trivia indexado por números
    trivia_data = {
        1: {
            "pregunta": "¿Qué famosa cantante de pop lanzó el éxito '...Baby One More Time' en 1998?",
            "opciones": ["A) Christina Aguilera", "B) Britney Spears", "C) Mandy Moore", "D) Jessica Simpson"],
            "respuesta": "B"
        },
        2: {
            "pregunta": "¿Qué serie de televisión de los 90's seguía la vida de seis amigos en la ciudad de Nueva York?",
            "opciones": ["A) Seinfeld", "B) Frasier", "C) Friends", "D) ER"],
            "respuesta": "C"
        },
        3: {
            "pregunta": "¿En qué año se lanzó la primera película de la saga 'Harry Potter' (La piedra filosofal)?",
            "opciones": ["A) 1998", "B) 2001", "C) 2003", "D) 2005"],
            "respuesta": "B"
        },
        4: {
            "pregunta": "¿Cuál es el nombre del protagonista de la serie de videojuegos 'The Legend of Zelda'?",
            "opciones": ["A) Link", "B) Zelda", "C) Ganondorf", "D) Epona"],
            "respuesta": "A"
        },
        5: { 
            "pregunta": "¿Qué película de ciencia ficción de 2010 dirigida por Christopher Nolan trata sobre los sueños?",
            "opciones": ["A) Interstellar", "B) Inception", "C) Tenet", "D) Memento"],
            "respuesta": "B"
        },
        6: {
            "pregunta": "¿Qué serie de drama y ciencia ficción de Netflix, se estrenó en 2016 y tuvo 5 temporadas?",
            "opciones": ["A) Dark", "B) Black Mirror", "C) Stranger Things", "D) The OA"],
            "respuesta": "C"
        },
        7: {
            "pregunta": "¿Cuál de estas celebridades no hizo un cameo en Friends?",
            "opciones": ["A) Brad Pitt", "B) Julianne Moore", "C) Reese Witherspoon", "D) George Clooney"],
            "respuesta": "B"
        },   
        8: { 
            "pregunta": "A menos que a alguien le importe muchísimo, nada va a mejorar. No es así.¿Es una cita de qué libro de Dr. Seuss?",
            "opciones": ["A) Horton y el mundo de los Quién", "B) Oh, cuán lejos llegarás", "C) El Lorax", "D) El gato"],
            "respuesta": "C"
        },
        9: {
            "pregunta": "¿Cuál de estos programas No se emitió en Nickelodeon?",
            "opciones": ["A) Avatar: La leyenda de Aang", "B) Los padrinos mágicos", "C) Victorious", "D) Dragon Ball Z"],
            "respuesta": "D"    
        },
        10: {
            "pregunta": "Ed Sheeran ha colaborado con varios artistas excepto?",
            "opciones": ["A) Nick Jonas", "B) Beyoncé", "C) Eminem", "D) Taylor Swift"],
            "respuesta": "A"
        }
    }

    # Buscamos si el número existe en nuestra base de datos de 1 a 10
    trivia_existente = trivia_data.get(num)
    
    if trivia_existente:
        # Si existe (del 1 al 10), le agregamos la clave "number"
        trivia_existente["number"] = num
        return trivia_existente
    else:
        # Si ingresan cualquier otro número (como 42 o 1000), devolvemos el formato vacío con su "number"
        return {"number": num, "pregunta": "", "opciones": [], "respuesta": ""}
        
def main():
    print("¡Bienvenido al Quiz de Cultura Pop!")    
    print("Responde las siguientes 10 preguntas eligiendo la opción correcta (A, B, C o D).")

    puntaje = 0
    total_preguntas = 10

    # Iteramos a través de los números del 1 al 10 usando nuestra función obligatoria
    for i in range(1, total_preguntas + 1):
        trivia = trivia_fetch(i)

        print(f"\nPregunta {i}: {trivia['pregunta']}")
        for opcion in trivia['opciones']:
            print(opcion)
        
        respuesta_usuario = input("Tu respuesta (A, B, C o D): ").strip().upper()
        
        if respuesta_usuario == trivia['respuesta']:
            print("¡Correcto!\n")
            puntaje += 1
        else:
            print(f"Incorrecto. La respuesta correcta era: {trivia['respuesta']}.\n")

    print(f"¡Has terminado el quiz! Tu puntaje final es: {puntaje}/{total_preguntas}")

if __name__ == "__main__":
    main()