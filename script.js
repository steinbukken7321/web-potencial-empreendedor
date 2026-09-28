const perguntasIntencao = [
    { id: 'v1', bloco: 'Intenção de Empreender', texto: 'Com certeza um dia terei meu próprio negócio.' },
    { id: 'v2', bloco: 'Intenção de Empreender', texto: 'Mesmo que eu trabalhe para outrem não abandonarei o desejo de ter meu próprio negócio.' },
    { id: 'v3', bloco: 'Intenção de Empreender', texto: 'Minha maior realização será ter o meu próprio negócio.' },
    { id: 'v4', bloco: 'Intenção de Empreender', texto: 'Ser auto-empregado, um empreendedor sempre foi minha aspiração.' }
];

const perguntasEscala1 = [
    { id: 'v5', bloco: 'Oportunidade', texto: 'Percebo as necessidades dos outros e como elas podem ser satisfeitas.' },
    { id: 'v6', bloco: 'Oportunidade', texto: 'Gosto de me informar sobre as necessidades das pessoas.' },
    { id: 'v7', bloco: 'Oportunidade', texto: 'Vivo em estado de alerta para alguma oportunidade que me possa surgir.' },
    { id: 'v8', bloco: 'Oportunidade', texto: 'Sinto-me capaz de identificar oportunidades de negócios e sair lucrando com isso.' },
    { id: 'v9', bloco: 'Oportunidade', texto: 'Creio sinceramente que as oportunidades estão aí para serem identificadas.' },
    { id: 'v10', bloco: 'Persistência', texto: 'Entendo que os obstáculos existem para serem superados.' },
    { id: 'v11', bloco: 'Persistência', texto: 'Quando levo um tombo levanto e continuo.' },
    { id: 'v12', bloco: 'Persistência', texto: 'Quando cometo um erro de planejamento, redefino as coisas e vou em frente.' },
    { id: 'v13', bloco: 'Persistência', texto: 'Encaro o fracasso como fonte de aprendizado para não cometer o mesmo erro novamente.' },
    { id: 'v14', bloco: 'Persistência', texto: 'Não me deixo abater pelo fracasso.' },
    { id: 'v15', bloco: 'Persistência', texto: 'Busco, de forma permanente, atingir meus objetivos.' }
];

const perguntasEscala2 = [
    { id: 'v16', bloco: 'Eficiência', texto: 'Gosto de cumprir prazos.' },
    { id: 'v17', bloco: 'Eficiência', texto: 'Gosto de realizar meus trabalhos de forma correta e dentro dos prazos estabelecidos.' },
    { id: 'v18', bloco: 'Eficiência', texto: 'Quando é preciso, faço as adaptações necessárias para que as coisas funcionem.' },
    { id: 'v19', bloco: 'Informações', texto: 'Quando estou em determinado ramo, tenho que aprender tudo sobre ele.' },
    { id: 'v20', bloco: 'Informações', texto: 'Quero saber cada vez mais, pois só assim sairei na dianteira.' },
    { id: 'v21', bloco: 'Informações', texto: 'Procuro estar informado sobre as coisas pertinentes ao que faço.' },
    { id: 'v22', bloco: 'Informações', texto: 'O mundo é dinâmico e preciso acompanhá-lo buscando sempre novos conhecimentos.' },
    { id: 'v23', bloco: 'Informações', texto: 'Se for preciso, pedirei ajuda a especialistas que me ensinem como fazer as coisas da melhor forma.' },
    { id: 'v24', bloco: 'Planejamento', texto: 'Não consigo fazer nada sem um planejamento bem detalhado.' },
    { id: 'v25', bloco: 'Planejamento', texto: 'Quem não consegue planejar suas atividades tende a fracassar.' },
    { id: 'v26', bloco: 'Planejamento', texto: 'Só sei se estou acertando se tiver um planejamento das minhas atividades.' },
    { id: 'v27', bloco: 'Planejamento', texto: 'Defino onde quero chegar e detalho todos os passos que devo seguir.' },
    { id: 'v28', bloco: 'Metas', texto: 'O que pretendo alcançar está claramente definido.' },
    { id: 'v29', bloco: 'Metas', texto: 'Sei determinar claramente quais são meus objetivos e metas.' },
    { id: 'v30', bloco: 'Metas', texto: 'Sei que posso definir meus rumos de curto, médio e longo prazo.' },
    { id: 'v31', bloco: 'Metas', texto: 'Sei onde pretendo chegar e o quanto pretendo alcançar.' },
    { id: 'v32', bloco: 'Metas', texto: 'Tenho convicção que vou alcançar meus objetivos e metas.' },
    { id: 'v33', bloco: 'Metas', texto: 'Sou capaz de traçar um rumo e estabelecer os ganhos que vou ter no final.' },
    { id: 'v34', bloco: 'Metas', texto: 'Gosto de estabelecer objetivos e metas para me sentir desafiado.' },
    { id: 'v35', bloco: 'Controle', texto: 'Meus controles me auxiliam na revisão de meus planos.' },
    { id: 'v36', bloco: 'Controle', texto: 'Costumo fazer anotações e manter registros das minhas ações.' },
    { id: 'v37', bloco: 'Controle', texto: 'Consulto meus registros antes de tomar decisões.' },
    { id: 'v38', bloco: 'Controle', texto: 'Vejo o planejamento como um guia para controlar as minhas ações.' },
    { id: 'v39', bloco: 'Controle', texto: 'Costumo verificar se as coisas estão acontecendo como planejei.' }
];

const perguntasEscala3 = [
    { id: 'v40', bloco: 'Persuasão', texto: 'Posso convencer pessoas a superar conflitos e atuar em equipe objetivando alcançar determinado resultado.' },
    { id: 'v41', bloco: 'Persuasão', texto: 'Sou capaz de estimular as pessoas a realizarem tarefas para as quais estão desmotivadas.' },
    { id: 'v42', bloco: 'Persuasão', texto: 'Sei quais as palavras e ações adequadas para estimular as pessoas.' },
    { id: 'v43', bloco: 'Persuasão', texto: 'Tenho formas de convencer as pessoas a mudarem de opinião.' },
    { id: 'v44', bloco: 'Persuasão', texto: 'Ajo de forma a motivar as pessoas e manter alto o moral em qualquer situação.' },
    { id: 'v45', bloco: 'Persuasão', texto: 'Sei que sou capaz de liderar uma equipe e atingir metas.' },
    { id: 'v46', bloco: 'Rede de Relações', texto: 'Procuro estabelecer uma boa rede de relacionamentos com conhecidos, amigos e pessoas que possam me ser úteis.' },
    { id: 'v47', bloco: 'Rede de Relações', texto: 'Procuro manter contato constante com as pessoas de minha rede de relações.' },
    { id: 'v48', bloco: 'Rede de Relações', texto: 'Tenho como manter contato fácil com as pessoas de minha rede de relações.' },
    { id: 'v49', bloco: 'Rede de Relações', texto: 'Sempre que posso procuro atender as solicitações que me fazem as pessoas de minha rede de relações.' }
];

const mediasEmpreendedores = {
    'Intenção': 8.9,
    'Oportunidade': 8.1,
    'Persistência': 8.9,
    'Eficiência': 9.1,
    'Informações': 9.0,
    'Planejamento': 8.2,
    'Metas': 8.5,
    'Controle': 8.3,
    'Persuasão': 8.4,
    'Rede de Relações': 8.6
};

const coresBlocos = {
    'Intenção de Empreender': { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-700' },
    'Oportunidade': { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-700' },
    'Persistência': { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-700' },
    'Eficiência': { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-700' },
    'Informações': { bg: 'bg-rose-50', border: 'border-rose-300', text: 'text-rose-700' },
    'Planejamento': { bg: 'bg-cyan-50', border: 'border-cyan-300', text: 'text-cyan-700' },
    'Metas': { bg: 'bg-indigo-50', border: 'border-indigo-300', text: 'text-indigo-700' },
    'Controle': { bg: 'bg-teal-50', border: 'border-teal-300', text: 'text-teal-700' },
    'Persuasão': { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-700' },
    'Rede de Relações': { bg: 'bg-fuchsia-50', border: 'border-fuchsia-300', text: 'text-fuchsia-700' }
};

let radarChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    renderizarPerguntas(perguntasIntencao, 'bloco-intencao');
    renderizarPerguntas(perguntasEscala1, 'bloco-escala-1');
    renderizarPerguntas(perguntasEscala2, 'bloco-escala-2');
    renderizarPerguntas(perguntasEscala3, 'bloco-escala-3');

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', (e) => {
            let val = parseInt(e.target.value);
            if (!isNaN(val)) {
                if (val > 10) e.target.value = 10;
                else if (val < 0) e.target.value = 0;
            }
        });
    });

    calcularEGerarGrafico();
});

function renderizarPerguntas(lista, containerId) {
    const container = document.getElementById(containerId);
    lista.forEach((q) => {
        const estilo = coresBlocos[q.bloco] || { bg: 'bg-slate-50', border: 'border-slate-300', text: 'text-blue-600' };

        const div = document.createElement('div');
        div.className = `${estilo.bg} p-4 rounded-xl border ${estilo.border} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`;
        
        div.innerHTML = `
            <div class="flex-1">
                <span class="text-xs font-bold uppercase tracking-wider ${estilo.text}">[${q.id.toUpperCase()}] ${q.bloco}</span>
                <p class="text-slate-800 font-medium text-sm mt-1">${q.texto}</p>
            </div>
            <div class="flex items-center gap-2">
                <input type="number" min="0" max="10" step="1" value=""
                    id="${q.id}" 
                    class="w-20 px-3 py-2 border-2 rounded-xl text-center font-bold text-base text-blue-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="0 a 10"
                    oninput="calcularEGerarGrafico()">
            </div>
        `;
        container.appendChild(div);
    });
}

function mudarAba(abaDestino) {
    const abas = ['jornada', 'questionario', 'resultados'];
    
    abas.forEach(aba => {
        const elemAba = document.getElementById(`aba-${aba}`);
        const elemBtn = document.getElementById(`btn-${aba}`);
        
        if (aba === abaDestino) {
            if(elemAba) elemAba.classList.remove('hidden');
            if(elemBtn) elemBtn.className = 'w-full text-left px-4 py-3 rounded-xl font-semibold transition-all bg-blue-600 text-white shadow-md';
        } else {
            if(elemAba) elemAba.classList.add('hidden');
            if(elemBtn) elemBtn.className = 'w-full text-left px-4 py-3 rounded-xl font-semibold transition-all text-slate-600 hover:bg-slate-100';
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function irParaResultados() {
    const nome = document.getElementById('part-nome').value || 'Não informado';
    const sexoElem = document.querySelector('input[name="sexo"]:checked');
    const sexo = sexoElem ? sexoElem.value : 'Não informado';
    const nascimento = document.getElementById('part-nascimento').value || 'Não informada';

    document.getElementById('resumoParticipante').innerHTML = `
        <strong>Participante:</strong> ${nome} | <strong>Sexo:</strong> ${sexo} | <strong>Data de nascimento:</strong> ${nascimento}
    `;

    calcularEGerarGrafico();
    mudarAba('resultados');
}

function voltarQuestionario() {
    mudarAba('questionario');
}

function calcularEGerarGrafico() {
    const respostas = {};
    const todasPerguntas = [...perguntasIntencao, ...perguntasEscala1, ...perguntasEscala2, ...perguntasEscala3];
    
    todasPerguntas.forEach(q => {
        const inputElem = document.getElementById(q.id);
        let val = inputElem ? parseInt(inputElem.value) : 0;
        if (isNaN(val)) val = 0;
        if (val < 0) val = 0;
        if (val > 10) val = 10;
        respostas[q.id] = val;
    });

    const calcularMedia = (ids) => {
        const soma = ids.reduce((acc, id) => acc + (respostas[id] || 0), 0);
        return (soma / ids.length).toFixed(1);
    };

    const mediasUsuario = {
        'Intenção': calcularMedia(['v1', 'v2', 'v3', 'v4']),
        'Oportunidade': calcularMedia(['v5', 'v6', 'v7', 'v8', 'v9']),
        'Persistência': calcularMedia(['v10', 'v11', 'v12', 'v13', 'v14', 'v15']),
        'Eficiência': calcularMedia(['v16', 'v17', 'v18']),
        'Informações': calcularMedia(['v19', 'v20', 'v21', 'v22', 'v23']),
        'Planejamento': calcularMedia(['v24', 'v25', 'v26', 'v27']),
        'Metas': calcularMedia(['v28', 'v29', 'v30', 'v31', 'v32', 'v33', 'v34']),
        'Controle': calcularMedia(['v35', 'v36', 'v37', 'v38', 'v39']),
        'Persuasão': calcularMedia(['v40', 'v41', 'v42', 'v43', 'v44', 'v45']),
        'Rede de Relações': calcularMedia(['v46', 'v47', 'v48', 'v49'])
    };

    const listaPontuacoes = document.getElementById('listaPontuacoes');
    if (listaPontuacoes) {
        listaPontuacoes.innerHTML = `
            <li class="flex justify-between border-b-2 pb-2 font-bold text-slate-500 text-xs uppercase tracking-wider">
                <span>Dimensão</span>
                <span>Você / Sucesso</span>
            </li>
        `;
        
        for (const [cat, val] of Object.entries(mediasUsuario)) {
            const mediaSucesso = mediasEmpreendedores[cat] || 0;
            
            const li = document.createElement('li');
            li.className = 'flex justify-between border-b pb-2 text-base items-center';
            li.innerHTML = `
                <span class="font-semibold text-slate-700">${cat}:</span> 
                <div class="font-mono">
                    <span class="font-bold text-blue-600 text-lg">${val}</span> 
                    <span class="text-slate-400 mx-1">/</span> 
                    <span class="font-bold text-emerald-600 text-lg">${mediaSucesso}</span>
                </div>
            `;
            listaPontuacoes.appendChild(li);
        }
    }

    const canvasElem = document.getElementById('radarChart');
    if (canvasElem) {
        const ctx = canvasElem.getContext('2d');
        
        if (radarChartInstance) {
            radarChartInstance.data.datasets[0].data = Object.values(mediasUsuario);
            radarChartInstance.update();
        } else {
            radarChartInstance = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: Object.keys(mediasUsuario),
                    datasets: [
                        {
                            label: 'Seu Perfil',
                            data: Object.values(mediasUsuario),
                            backgroundColor: 'rgba(37, 99, 235, 0.25)',
                            borderColor: 'rgba(37, 99, 235, 1)',
                            borderWidth: 3,
                            pointBackgroundColor: 'rgba(37, 99, 235, 1)',
                            pointRadius: 4
                        },
                        {
                            label: 'Empreendedores de Sucesso',
                            data: Object.values(mediasEmpreendedores),
                            backgroundColor: 'rgba(16, 185, 129, 0.15)',
                            borderColor: 'rgba(16, 185, 129, 1)',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                            pointRadius: 3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            min: 0,
                            max: 10,
                            ticks: { stepSize: 2, font: { size: 12 } },
                            pointLabels: { font: { size: 13, weight: 'bold' } }
                        }
                    }
                }
            });
        }
    }
}