const projetos = [
    {
        nome: "Chatbot IA",
        descricao: "Um chatbot inteligente para a faculdade Impacta.",
        tecnologias: ["JavaScript", "HTML", "CSS"], 
        link: "https://chatbot-faculdade-impacta-hpxy-5v6irkx12.vercel.app/"
    },
    {  
        nome: "Calculadora de Juros Compostos",
        descricao: "Calculadora para calcular juros compostos.",
        tecnologias: ["JavaScript", "HTML", "CSS"],
        link: ""
    },
    {
        nome: "Planner de Tarefas",
        descricao: "Organizador com barra de progresso.",
        tecnologias: ["JavaScript", "HTML", "CSS"],
        link: ""
    }
   
]


projetos.forEach(function(projeto, index) {
    const container = document.getElementById("projetos-container");
    container.innerHTML += `
        <div class="projeto">
            <h2>${projeto.nome}</h2>
            <p>${projeto.descricao}</p>
            <p>Tecnologias: ${projeto.tecnologias.join(", ")}</p>
            <a href="${projeto.link}" target="_blank">Acessar Projeto</a>
        </div>
    `;

})