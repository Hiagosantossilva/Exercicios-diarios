
const projetos = [
    {
        nome: "Chatbot IA",
        descricao: "Um chatbot inteligente para a faculdade Impacta.",
        tecnologias: ["JavaScript", "HTML", "CSS"], 
        link: "https://chatbot-faculdade-impacta-hpxy-5v6irkx12.vercel.app/",
        imagem: 'imagem/chatbot.png'
    },
    {  
        nome: "Planner de tarefas",
        descricao: "Organizador com barra de progresso.",
        tecnologias: ["JavaScript", "HTML", "CSS"],
        link: "https://projeto-planner-rho.vercel.app/",
        imagem: 'imagem/planner.png'

    },
    {
        nome: "Alura",
        descricao: "Exercício Robotron da Alura",
        tecnologias: ["JavaScript", "HTML", "CSS"],
        link: "https://alura-exercicios-js.vercel.app/",
        imagem: 'imagem/alura.png'

    }
   
]


projetos.forEach(function(projeto, index) {
    const container = document.getElementById("projetos-container");
    container.innerHTML += `
            <div class="projeto">
                <a href="${projeto.link}" target="_blank">
                    <img src="${projeto.imagem}">
                    <h2>${projeto.nome}</h2>
                    <p>${projeto.descricao}</p>
                    <p>Tecnologias: ${projeto.tecnologias.join(", ")}</p>
                </a>

            </div>
    `;
})