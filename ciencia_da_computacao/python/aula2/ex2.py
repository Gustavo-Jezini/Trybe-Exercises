def soma(numbers):
    total = 0
    list_numbers = numbers.split()
    for number in list_numbers:
        if number.isdigit():
            total += int(number)
        else:
            print(f"Erro ao somar valores, {number} é um valor inválido")
    return total


print(soma('1 2 3 4 5 l'))
