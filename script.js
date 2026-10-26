const perguntas = [
    {
        pergunta: "1. Qual é a tradução literal da palavra 'Muay'?",
        opcoes: ["Luta ou Combate", "Força Espiritual", "Caminho da Paz"],
        correta: 0
    },
    {
        pergunta: "2. Por que o Muay Thai é conhecido como a 'Arte das Oito Armas'?",
        opcoes: [
            "Porque utiliza 8 tipos de armas de metal", 
            "Porque usa dois punhos, dois cotovelos, dois joelhos e duas canelas/pés", 
            "Porque o combate dura 8 rounds de treino"
        ],
        correta: 1
    },
    {
        pergunta: "3. Qual é o nome da dança/ritual de respeito realizada pelos lutadores antes do combate?",
        opcoes: ["Wai Kru Ram Muay", "Mongkhon", "Pra Jiad"],
        correta: 0
    },
    {
        pergunta: "4. Qual objeto tradicional é usado na cabeça pelo atleta durante a entrada no ringue?",
        opcoes: ["Pra Jiad", "Mongkhon", "Kru"],
        correta: 1
    },
    {
        pergunta: "5. Qual país é o berço histórico e cultural do Muay Thai?",
        opcoes: ["Japão", "China", "Tailândia"],
        correta: 2
    },
    {
        pergunta: "6. Qual é a utilidade do 'Pra Jiad' (amuleto trançado no braço do atleta)?",
        opcoes: [
            "Proteger a articulação do ombro", 
            "Trazer sorte e demonstrar graduação/respeito à escola", 
            "Aumentar o impacto dos golpes de cotovelo"
        ],
        correta: 1
    },
    {
        pergunta: "7. Qual estilo de música tradicional acompanha os combates de Muay Thai?",
        opcoes: ["Sarama", "Krueang", "Pi Phat"],
        correta: 0
    }
];

let indicePergunta = 0;
let acertos = 0;

function carregarPergunta() {
    if (indicePergunta >= perguntas.length) {
        document.getElementById('quiz').innerHTML = `
            <h2>Quiz Concluído!</h2>
            <p style="margin-top: 10px; font-size: 1.2rem;">
                Você acertou <strong>${acertos}</strong> de <strong>${perguntas.length}</strong> perguntas!
            </p>
            <button class="btn-opcao" onclick="reiniciarQuiz()" style="margin-top: 15px;">Tentar Novamente</button>
        `;
        return;
    }

    const q = perguntas[indicePergunta];
    document.getElementById('progresso').innerText = `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;
    document.getElementById('pergunta-texto').innerText = q.pergunta;

    const container = document.getElementById('opcoes-container');
    container.innerHTML = '';

    q.opcoes.forEach((opcao, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcao';
        btn.innerText = opcao;
        btn.onclick = () => verificarResposta(index);
        container.appendChild(btn);
    });
}

function verificarResposta(opcaoSelecionada) {
    const q = perguntas[indicePergunta];
    const resultado = document.getElementById('resultado');

    if (opcaoSelecionada === q.correta) {
        acertos++;
        resultado.style.color = "#008000";
        resultado.innerText = "Correto!";
    } else {
        resultado.style.color = "#A51931";
        resultado.innerText = "Incorreto!";
    }

    setTimeout(() => {
        resultado.innerText = "";
        indicePergunta++;
        carregarPergunta();
    }, 1200);
}

function reiniciarQuiz() {
    indicePergunta = 0;
    acertos = 0;
    location.reload();
}

// Inicializa a primeira pergunta
carregarPergunta();