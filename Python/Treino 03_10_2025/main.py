def somar(a, b):
    resultado = a + b
    return resultado

numero1 = int(input('Digite o primeiro número:' ))
numero2 = int(input('Digite o segundo número: '))

total = (somar(numero1, numero2))

print(f'A soma de {numero1} e {numero2} é: {total}')