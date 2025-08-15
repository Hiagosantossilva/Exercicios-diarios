from flask import Flask, jsonify
import requests

app = Flask(__name__)

#rotas 

@app.route('/')

def home():
    resposta = requests.get("https://www.boredapi.com/api/activity")
    dados = resposta.json()
    return jsonify(dados)

if __name__ == '__main__':
    app.run(debug=True)

