data_nascimento = float(input())
data_atual = float(input())

def idade_func (i, f):
        idade = f - i
        return idade

idade = idade_func(data_atual, data_nascimento)

print(idade)
