import random

frases = [
    "A vida é uma aventura ousada ou não é nada.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A vida é 10% do que acontece conosco e 90% de como reagimos a isso.",
    "A única limitação para o nosso reconhecimento de amanhã são as nossas dúvidas e hesitações"
]
sorte = random.choice(frases)

with open("abra-o.txt", "w", encoding="utf-8") as arquivo:
    arquivo.write(f"Biscoito da sorte: {sorte}\n")