const mudarCor = window.document.querySelector('#btnCor');

mudarCor.addEventListener('click', () => {
    const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const corAleatoria = Math.floor(Math.random() * cores.length);
    document.body.style.backgroundColor = cores[corAleatoria];



})