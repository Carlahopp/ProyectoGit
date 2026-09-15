#FizzBuzz práctica 1

def FizzBuzz(n = 1000):
    lista_resultados = []

    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            lista_resultados.append ("Fizzbuzz")
        elif i % 3 == 0:
            lista_resultados.append("Fizz")
        elif i % 5 == 0:
            lista_resultados.append("Buzz")
        else:
            lista_resultados.append(str(i))
    return "\n".join(lista_resultados)

print(FizzBuzz())