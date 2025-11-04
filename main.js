const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Ao ser convidado para uma festa, qual é a reação comum? ",
        alternativas: [
            {
                texto: " Demonstra entusiasmo para conhecer gente nova.",
                afirmacao: [
                    " Você é o tipo de pessoa que se sente energizada em ambientes sociais. Para você, a interação com os outros é a principal fonte de energia, e você adora a oportunidade de conversar e criar novas conexões. ",
                    "Sua curiosidade pelo mundo é insaciável; para você, o fim de semana perfeito envolve movimento, risadas em grupo e histórias para contar na segunda-feira. ",
                    " A solitude prolongada pode parecer monótona — você se sente mais vivo quando está imerso em interações espontâneas e descobertas coletivas. "
                ]
            },
            {
                texto: " Prefere eventos mais calmos e selecionados. ",
                afirmacao: [
                    " Você prefere encontros íntimos e conversas profundas, recarregando suas energias no tempo a sós ou com poucas pessoas de confiança. ",
                    " Para você, o fim de semana ideal é um refúgio introspectivo; atividades solitárias ou com um círculo mínimo de confiança promovem clareza mental e criatividade interna. ",
                    " Multidões e agendas lotadas podem drenar sua vitalidade — o verdadeiro descanso vem da imersão em mundos internos ou em conexões selecionadas e significativas. "
                ]
            }
        ]
    },
    {
        enunciado: " Como você se sente depois de um dia de trabalho em grupo? ",
        alternativas: [
            {
                texto: " Revigorado(a), pronto para sair de novo! ",
                afirmacao: [
                    " Você se recarrega com a interação social e se sente mais produtiva e inspirada em ambientes de grupo, onde a troca de ideias estimula sua criatividade e colaboração. ",
                    " A sinergia coletiva é seu combustível; debates animados e risadas compartilhadas transformam o cansaço em empolgação, deixando-o com energia para mais conexões. ",
                    " Para você, o fim do expediente não é barreira — o momentum do grupo prolonga sua vitalidade, tornando planos noturnos uma extensão natural do dia. "
                ]
            },
            {
                texto: " Precisa de um tempo a sós para relaxar. ",
                afirmacao: [
                    " Você precisa de tempo sozinho para se reconectar, pois o excesso de estímulo social pode te cansar. Por isso, valoriza momentos de paz para renovar suas energias e organizar suas ideias. ",
                    " A solitude pós-grupo é essencial para processar informações e restaurar o equilíbrio interno, evitando a sobrecarga sensorial acumulada durante o dia. ",
                    " Ambientes colaborativos intensos drenam sua reserva; o silêncio intencional permite que você reintegre pensamentos e emerja renovado para interações futuras. "
                ]
            }
        ]
    },

    {
        enunciado: " Qual o seu estilo em uma conversa em grupo? ",
        alternativas: [
            {
                texto: " Gosta de contar histórias e participar ativamente. ",
                afirmacao: [
                    " Você tem uma habilidade natural de se comunicar, fazendo qualquer conversa fluir e se tornando a alma do ambiente. ",
                    " Sua energia contagia o grupo; histórias vivas e comentários espontâneos criam conexões instantâneas e mantêm todos engajados no momento. ",
                    " O silêncio coletivo não combina com você — falar é sua forma de construir pontes, gerar risadas e transformar encontros casuais em memórias compartilhadas. "
                ]
            },
            {
                texto: " Prefere ouvir mais do que falar e contribuir apenas quando necessário. ",
                afirmacao: [
                    " Você é um ouvinte atento(a) e tranquilo(a), sempre absorvendo as informações com calma. Suas contribuições são sempre precisas e vêm com propósito, adicionando valor à conversa. ",
                    " A observação estratégica é sua força; você capta nuances, evita ruídos e intervém com insights que elevam o nível do diálogo sem dominar o espaço. ",
                    " Falar por falar drena sua energia — você guarda a voz para ideias maduras, garantindo que cada palavra tenha peso e ressonância no grupo. "
                ]
            }
        ]
    },
    {
        enunciado: " No fim de semana ideal, o que não pode faltar?",
        alternativas: [
            {
                texto: " Eventos com amigos e família. ",
                afirmacao: [
                    " Para você, o fim de semana perfeito é cheio de movimento e socialização. Sua agenda fica repleta de eventos, sempre em busca de novas interações e experiências. ",
                    " Risadas em grupo e planos improvisados são o oxigênio do seu descanso; sem gente por perto, o tempo parece vazio e sem graça. ",
                    " A bateria social recarrega ao máximo quando há barulho de vozes conhecidas, brindes e histórias que se estendem até tarde. "
                ]
            },
            {
                texto: " Tempo para ler, ver um filme ou simplesmente relaxar em casa. ",
                afirmacao: [
                    " Para você, o fim de semana é um verdadeiro refúgio, onde a paz e o tempo sozinho são essenciais para recarregar as energias e encontrar equilíbrio. ",
                    " O silêncio da casa é seu santuário; páginas viradas ou tela acesa em solitude restauram o que a semana consumiu. ",
                    " Convites podem esperar — nada supera o conforto de um canto quieto onde pensamentos fluem livres e o mundo lá fora fica em pausa. "
                ]
            }
        ]
    },
    {
        enunciado: " Quando conhece alguém novo, como é o processo? ",
        alternativas: [
            {
                texto: " Conversa com entusiasmo e compartilha detalhes da vida. ",
                afirmacao: [
                    " Você se abre com facilidade e, com sua habilidade de se expressar, cria novas conexões de forma natural e fluida. ",
                    " A conversa é sua ponte instantânea; em minutos você troca histórias, risadas e já marca o próximo encontro. ",
                    " Guardar segredos não é seu estilo — quanto mais você revela, mais real e viva a conexão se torna. "
                ]
            },
            {
                texto: " Observa a pessoa e só se abre quando sente confiança. ",
                afirmacao: [
                    " Você tende a ser mais cauteloso(a) preferindo que as conexões se desenvolvam de maneira gradual, e só se abre plenamente com pessoas em quem realmente confia. ",
                    " O silêncio inicial é sua triagem; você lê gestos, escuta tons e só avança quando o terreno parece sólido. ",
                    " Abrir-se cedo pode parecer risco — para você, intimidade é conquista lenta, construída em camadas de confiança mútua. "
                ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Se eu te defino...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();