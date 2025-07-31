const btnBuscar = document.getElementById('btnBuscar');
const res = document.getElementById('resultado');

btnBuscar.addEventListener('click', () => {
    const artista = document.getElementById('artista').value;
    const musica = document.getElementById('musica').value;
    buscarLetra(artista, musica);

});

async function buscarLetra(artista, musica){
    try{
        const response = await fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`);
        const data = await response.json();
        mostrarLetra(data.lyrics);
    } catch (error) {
        console.error('Erro ao buscar a letra:', error);
}}

function mostrarLetra(texto) {
    res.innerHTML = `<h2>${texto} </p> `;
}


