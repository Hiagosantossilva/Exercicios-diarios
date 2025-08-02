const botao = window.document.querySelector('#enviar')

botao.addEventListener('click', () => {
    const peso = window.document.querySelector('#peso').value;
    const altura = window.document.querySelector('#altura').value;  
    const resultado = window.document.querySelector('#resultado');

    let calculo = peso / (altura * altura)
    let classificacao = '';

    if(calculo < 18.5) {
        classificacao = `Abaixo do peso:`
    } else if(calculo >= 18.5 && calculo < 24.9) {
        classificacao = `Peso normal:`
    } else if(calculo >= 25 && calculo < 29.9) {
        classificacao = `Sobrepeso:`
    } else if(calculo >= 30 && calculo < 34.9) {
        classificacao = `Obesidade grau 1:`
    } else if(calculo >= 35 && calculo < 39.9) {
        classificacao = `Obesidade grau 2:`
    } else {
        classificacao = `Obesidade grau 3:`
    }

    resultado.innerHTML = `Seu IMC é: ${calculo.toFixed(2)}, ${classificacao}`
})
