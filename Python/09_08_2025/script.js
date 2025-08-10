document.getElementById("verificar").addEventListener("click", () => {
    const number = parseInt(document.getElementById("numberInput").value);

    if (number % 2 === 0) {
        alert("O número " + number + " é par.");
    } else { 
        alert("O número " + number + " é impar.")
    }
})
