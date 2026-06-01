# idade = int(input("Qual a sua idade?"))

# if idade > 17:
#     print("Tá liberado!")
# elif idade > 15: 
#     print("Pode não!")
# else:
#     print("VAZAAAAAA")

email = str(input("Digite seu E-mail:"))
senha = input("Crie uma senha:")

verificacao = str(input("Cadastro criado com sucesso! " \
"Deseja fazer Login? (s/n)")).lower().strip()

if verificacao == "s":
    login_email = str(input("Digite seu E-mail:"))
    login_senha = input("Crie uma senha:")
    if login_email == email and senha == login_senha:
        print("Acesso liberado!")
    else:
        print("Vaza daqui fióti!")
else:
    print("Tenha um excelente dia!")