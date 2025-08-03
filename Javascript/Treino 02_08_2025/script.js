const botao = document.getElementById('verificar');
botao.addEventListener('click', () => { 

    const numero = parseInt(document.getElementById('numero').value);

    const resultado = document.getElementById('resultado');
    if (numero % 2 === 0){
        resultado.innerHTML = `O número ${numero} é par.`;
    } else {
        resultado.innerHTML = `O número ${numero} é ímpar.`;
    }
})