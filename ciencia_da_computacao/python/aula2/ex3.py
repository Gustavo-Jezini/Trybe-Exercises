file_alunos = open("alunos.txt", mode="r")

for line in file_alunos:
    aluno = line.split()
    if int(aluno[1]) > 6:
        print(aluno[0])


file_alunos.close()
