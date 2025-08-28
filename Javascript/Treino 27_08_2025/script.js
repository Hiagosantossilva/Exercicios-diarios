const calcular = document.getElementById('calcular');
calcular.addEventListener('click', function() {     
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const imc = peso / (altura * altura);
    alert(`Seu IMC é ${imc.toFixed(2)}`);

})