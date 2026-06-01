# contador = 10
# acumulador = 0
# while contador >= 1:
#     acumulador += 1
#     print(f"Contagem atual: {acumulador}")
#     contador -= 1

compras = ["Arroz", "Feijão", "Leite", 22, "Macarrão"]

for item in compras:
    print(f"Você precisa comprar: {item}")
    if isinstance(item, int):
        break
