# escrita
file = open("arquivo_teste.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo_teste.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo
