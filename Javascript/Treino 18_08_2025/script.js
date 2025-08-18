const number = window.document.getElementById('numInput');
const button = window.document.getElementById('enviar');
button.addEventListener('click', () => {
    if(number.value <= 50){
        alert("Você escolheu um número menor ou igual a 50")
    } else{
        if (number.value > 50 && number.value <= 100)
            {
                alert("Você escolheu um número maior que 50!")
            } 
        else{ 
                alert("Você é um ganâncioso! Escolha um nnúmero menor ou igual a 100!")
            }
    } 
})
