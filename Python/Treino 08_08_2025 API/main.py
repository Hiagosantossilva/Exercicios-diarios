import requests
from deep_translator import GoogleTranslator

resposta = requests.get("https://catfact.ninja/fact")
dados = resposta.json()

# Traduz o fato sobre gatos para português

traducao = GoogleTranslator(source='en', target='pt').translate(dados["fact"])

# Escreve o fato traduzido em um arquivo de texto

with open("arquivo.txt", "a", encoding="utf-8") as arquivo:
        arquivo.write(f"Um fato sobre gatos: {traducao}\n")

