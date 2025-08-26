const verificar = document.getElementById('verificar');
verificar.addEventListener('click', () => {
    maiorDeIdade = 18;
    const idade = document.getElementById('idade').value;
    const resultado = document.getElementById('resultado');

    if (idade >= maiorDeIdade) {
        resultado.textContent = "Você é maior de idade.";
    } else {
        resultado.textContent = "Você é menor de idade.";       
    }
}
);
