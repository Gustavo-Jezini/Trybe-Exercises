def maior_nome(lista_de_nomes):
    nome = ''
    for name in lista_de_nomes:
        if len(name) > len(nome):
            nome = name
    print(nome)


maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
