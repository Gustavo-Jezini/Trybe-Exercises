def tipo_triangulo(lado1, lado2, lado3):
    e_triangulo = (
      lado1 + lado2 > lado3 and
      lado2 + lado3 > lado1 and
      lado1 + lado3 > lado2
    )
    if not e_triangulo:
        return "Não é triangulo"
    elif lado1 == lado2 == lado3:
        return "é equilatero"
    elif lado1 == lado2 or lado1 == lado3 or lado3 == lado2:
        return "é isosceles"
    else:
        return "É escaleno"


print(tipo_triangulo(3, 3, 3))
