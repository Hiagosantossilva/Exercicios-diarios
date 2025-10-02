const cor = document.getElementById('color');
cor.addEventListener('click', mudarCor);

function mudarCor() {
    alert('você clicou!');
    document.body.style.backgroundColor = "lightblue";
}