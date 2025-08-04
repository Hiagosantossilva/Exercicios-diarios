const mais = document.getElementById('mais');
const menos = document.getElementById('menos'); 
var contador = 0;

mais.addEventListener('click', () => {
    contador = contador + 1;  
    const resposta = document.getElementById('res');
    resposta.innerHTML = contador;
})

menos.addEventListener('click', () => {
    if (contador > 0) {
        contador = contador - 1;  
    } else {
        contador = 0
    }
    const resposta = document.getElementById('res');
    resposta.innerHTML = contador;
})