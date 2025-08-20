const soma = window.document.getElementById("somar");
soma.addEventListener("click", () => {
    const num1 = parseFloat(window.document.getElementById("num1").value);
    const num2 = parseFloat(window.document.getElementById("num2").value);
    const resultado = num1 + num2;
    alert(`O resultado da soma é: ${resultado}`);

})