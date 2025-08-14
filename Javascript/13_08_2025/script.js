const res = document.getElementById("res");
const array= [
    {
        titulo: "JavaScript",
        descricao: "Linguagem de programação para desenvolvimento web.",
        nivel: "Intermediário"
    },
    {
        titulo: "HTML",
        descricao: "Linguagem de marcação para estruturar páginas web.",    
        nivel: "Básico"
    }
]
res.innerHTML = array.map(titulo =>
{
    return `<h2>${titulo.titulo}</h2>
            <p>${titulo.descricao}</p>
            <p>Nível: ${titulo.nivel}</p>`
});