const calcular = document.getElementById('calcular');
calcular.addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    resultado = num1 + num2;
    alert(`O resultado é: ${resultado}`);

})
