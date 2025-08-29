function data(){
    const res = document.getElementById('res');
    const dataAtual = new Date();
    const diaDoMês = dataAtual.getDate();
    res.innerHTML = `Data e hora atual: ${diaDoMês}`;
}

data();