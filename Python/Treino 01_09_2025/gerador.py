import random
import string

def gerar_senha(tamanho=12):
    """Gera uma senha aleatória com letras maiúsculas, minúsculas, dígitos e símbolos."""
    caracteres = string.ascii_letters + string.digits + string.punctuation
    senha = ''.join(random.choice(caracteres) for _ in range(tamanho))
    return senha

tamanho = int(input("Digite o tamanho da senha desejada: "))
print("senha gerada:", gerar_senha(tamanho))