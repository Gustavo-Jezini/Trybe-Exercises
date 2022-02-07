def soma(n):
    somatorio = 0
    for number in range(1, n + 1):
        somatorio += number
    return somatorio


print(soma(100))
