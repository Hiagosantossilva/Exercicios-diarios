import random

numero_secreto = random.randint(1, 10)
user_numer = int(input("Adivinhe o número secreto entre 1 e 10: "))

if user_numer == numero_secreto:
    print("Parabéns! Você adivinhou o número secreto.")
else:
    print(f"Errado! O número secreto era {numero_secreto}.")