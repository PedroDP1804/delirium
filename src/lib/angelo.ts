import type { Feitiço, Personagem } from "./personagem"

//Hardcoded por enquanto (TO-DO)
const feiticos_angelo:Feitiço[] = [
    {
        nome: "Paleta de Cores",
        nivel: 0,
        custo: 0,
        caracteristicas: {
            cor: "Sem Cor",
            conjuracao: "Ação Livre / Ação Bônus",
            alcance: "Toque / 9m",
            alvo: "Um Objeto",
            duracao: "Cena ou até ser consumido, o que for menor",
            requisitos: ["Fácil, +2PE | Tocar ou estar no alcance de um objeto que contém a cor desejada",]
        },
        descricao: {
            mecanica:   "\t\t\tVocê extrai uma cor de um objeto - como ação livre para toque, ou como ação bônus para alcance 9m -, e imbui sua Técnica Amaldiçoada naquela cor. Enquanto estiver com uma cor infundida, você recebe um dos efeitos descritos mais a frente, de acordo com a cor extraída. Você pode consumir essa cor e canalizá-la em um Feitiço de mesma cor para utilizá-lo, perdendo os efeitos de infusão da cor. O efeito de infusão de uma cor também vale pro Feitiço que gastar essa cor."
                        + "\n\n\t\t\t\t-Vermelho: Objetos se afastando do observador sofrem desvio pro vermelho, por causa do efeito Doppler. Para quaisquer efeitos com alcance maior que corpo-a-corpo, você conta como se estivesse a 3 metros a mais do que realmente está."
                        + "\n\t\t\t\t-Azul: Objetos se aproximando do observador sofrem desvio pro azul, por causa do efeito Doppler. Para quaisquer efeitos seus, o alvo conta como se estivesse a 3 metros a menos do que realmente está."
                        + "\n\t\t\t\t-Verde: Verde está associado, entre outros, a sustentabilidade e saúde. Você recicla os resquícios de energia amaldiçoada desperdiçada pela sua técnica em uma camada protetora. A cada 3 PE gastos enquanto sob esse efeito, você ganha 2 PV temporários, até um máximo de 2x o seu nível."
                        + "\n\t\t\t\t-Amarelo: Amarelo está associado a chamar a atenção ou induzir a ficar atento. Você aprimora a capacidade de atenção da sua mente, recebendo +1 em Percepção e em Testes de Resistência de Astúcia."
                        + "\n\t\t\t\t-Violeta: É a maior frequência no espectro da luz visível, e também a que carrega mais energia. Você sobrecarrega seus Feitiços e Aptidões com energia púrpura, causando +4 de dano em Feitiços e Aptidões de dano."
                        + "\n\t\t\t\t-Marrom: Essa cor é associada a diversos elementos de terreno: solo, lama, buracos, troncos e raízes, etc. Você se adapta a esses elementos, ignorando terreno difícil."
                        + "\n\t\t\t\t-Branco: Uma cor espeical, a mistura de todas as cores-luz - ou especificamente das cores Vermelho, Verde e Azul, no modelo RGB. Se estiver com essas três cores infundidas, você pode gastar uma Ação Bônus para misturá-las, formando e infundindo a cor Branco. Você se sobrecarrega com todas as cores, uma amálgama de possibilidades, recebendo todos os benefícios das outras cores, mas fica Desorientado e Desprevinido até dissipar o efeito. Se preferir, pode não receber esses efeitos mas ainda manter a cor infundida."
                        + "\n\n\t\t\tUma mesma cor de um mesmo objeto só pode ser extraída uma vez por cena. Você pode ter até 3 cores infundidas simultaneamente, mas você gasta 1 PE por rodada se tiver duas e 3 PE por rodada se tiver três. Bônus de mesma cor não acumulam. Todas as cores infundidas são perdidas no fim da cena. Você pode descartar uma cor a qualquer momento como ação livre.",
            narrativa: "\t\t\t"
        },
        observacoes: [
            "O feitiço tem um requisito fácil, que é absorver a cor de um objeto, nisso ela ganha +2PE (que não aumentam o custo, mas permite ela ser mais forte), se tornando equivalente a um feitiço de 1o nivel. Eu segui as tabelas a partir da página 217 do livro pra balancear os efeitos, usando nivel 1 e duração duradoura/sustentada.",
            "O branco é um Voto Próprio Médio Temporário, por isso é mais forte",
        ]
    },
    {
        nome: "Radiação de Corpo Negro",
        nivel: 1,
        custo: 2,
        caracteristicas: {
            cor: "Vermelho",
            conjuracao: "Ação Comum",
            alcance: "6m",
            alvo: "Uma Criatura",
            requisitos: ["Médio, +4PE/+2d | Ter a cor Vermelho infundida",]
        },
        descricao: {
            mecanica: "\t\t\tVocê emite um feixe concentrado de luz vermelha e infravermelha em um alvo, irradiando-o e causando fortes queimaduras em seu corpo. O alvo sofre 5d8 de dano Queimante e fica Sofrendo por 1 rodada. Se for bem-sucedido num Teste de Resistência de Fortitude, sofre apenas metade do dano e evita a condição.",
            narrativa: "\t\t\tRadiação de Corpo Negro é a energia térmica que um corpo emite na forma de luz, normalmente infravermelha. Objetos muito quentes, o suficiente pra esquentar outros objetos por irradiação, chegam a emitir luz vermelha."
        },
        observacoes: ["(3d/12m) (+2d req.) (+1d/-6m) (-1d cond. leve)"]
    },
    {
        nome: "Dispersão Celeste",
        nivel: 1,
        custo: 2,
        caracteristicas: {
            cor: "Azul",
            conjuracao: "Ação Comum",
            alcance: "12m",
            alvo: undefined,
            requisitos: ["Médio, +4PE/+2d | Ter a cor Azul infundida",]
        },
        descricao: {
            mecanica: "\t\t\tVocê emite sua Energia Amaldiçoada com mesmo comprimento de onda da luz azul, fazendo com que ela seja espalhada pela atmosfera e atinja uma área alvo. Escolha um ponto no alcance, seres a até 4,5m do ponto escolhido devem fazer um Teste de Resistência de Reflexos, sofrendo 4d8 de dano Energético se falharem ou metade disso, caso contrário.",
            narrativa: "\t\t\tA dispersão de Rayleigh é a dispersão da luz ou qualquer outra radiação eletromagnética por partículas muito menores que o comprimento de onda dos fótons dispersados. Ocorre quando a luz viaja por sólidos e líquidos transparentes, mas se observa com maior frequência nos gases. A dispersão de Rayleigh da luz solar na atmosfera é a principal razão pela qual o céu é azul."
        },
        observacoes: ["(2d) (+2d req.)"]
    },
    {
        nome: "Dupla Imagem",
        nivel: 1,
        custo: 2,
        caracteristicas: {
            cor: "Verde",
            conjuracao: "Reação + Ação Bônus + Ação Comum",
            alcance: "60m",
            alvo: "Uma Criatura",
            requisitos: ["Médio, +4PE/+2d | Ter a cor Verde infundida", "Médio, +4PE/+2d | Alvo ter conjurado um feitiço de nível 1 ou inferior nessa rodada + uso de várias ações",]
        },
        descricao: {
            mecanica: "\t\t\tQuando um Feitiço de nível igual ou inferior a este é conjurado em seu campo de visão e dentro do alcance, você pode usar uma Reação pra espelhar a imagem daquele Feitiço, criando um reflexo. Até o fim de seu próximo turno, você pode usar uma Ação Bônus para focalizar esse reflexo em si mesmo, temporariamente tendo-o como se fosse seu. Até o fim do outro turno (o segundo após espelhar), você pode gastar 2 PE e uma Ação Comum ou a ação original do Feitiço, o que for maior, para replicar a conjuração dele, podendo ser em sua versão base ou com Votos.\n\t\tAlém disso, você pode aplicar duas melhorias de ritual nele. Você conjura o Feitiço como se fosse seu, tomando quaisquer decisões necessárias para conjurá-lo. Não se pode espelhar Feitiços de um mesmo alvo mais de uma vez na mesma cena.",
            narrativa: "\t\t\tEmbora possa se pensar que espelhos são brancos, prateados ou cinzas, eles na verdade refletem a luz verde ligeiramente melhor do que qualquer outra cor, fazendo com que sejam levemente esverdeados, apesar de ser difícil perceber. Isso acontece porque o vidro comum usado na fabricação absorve levemente os outros espectros de luz e reflete com mais intensidade a faixa do verde."
        },
        observacoes: ["(12m) (+4PE req. -> +24m) (+4PE req. -> +24m) (+2 melhorias de ritual ação completa, usadas no feitiço copiado)"]
    },
    // {
    //     nome: "Nome",
    //     nivel: 1,
    //     custo: 2,
    //     caracteristicas: {
    //         cor: "Cor",
    //         conjuracao: "Ação Comum",
    //         alcance: "6m",
    //         alvo: "Uma Criatura",
    //         requisitos: ["Médio, +4PE/+2d | Ter a cor Vermelho infundida",]
    //     },
    //     descricao: {
    //         mecanica: "\t\t\t",
    //         narrativa: "\t\t\t"
    //     },
    //     observacoes: ["(2d) (+2d req.)"]
    // },
]

//Hardcoded por enquanto (TO-DO)
export const angelo:Personagem = {
    nome: "Ângelo Algumacoisa",
    origem: "Inato",
    especializacao: "Especialista em Técnica",
    nivel: 2,
    grau: 4,
    atributo_cd: "I",
    atributos: {
        forca: 9,
        destreza: 14,
        constituicao: 10,
        inteligencia: 15,
        sabedoria: 12,
        presenca: 12,
    },
    stats: {
        pv_max: 15,
        pv_atual: 15,
        pv_temp: 0,
        pe_max: 14,
        pe_atual: 14,
        pe_temp: 0,
        integridade_atual: 15,
        defesa: 10,
        deslocamento: 9,
        rds: []
    },
    bonus: {
        atencao: [{fonte:"paleta", bonus:0}],
        defesa: [],
        cd_especializacao: [],
    },
    tecnica: {
        nome: "Aquarela",
        descricao: "A técnica permite conjurar fenômenos, manifestar características e aplicar efeitos associados diretamente a cores específicas, seja por aspectos do universo ou pela concepção humana.",
        atributo: "I",
        bonus_cd: [],
        feiticos: feiticos_angelo,
        expansao: null,
        maxima: null,
    },
    pericias: {
        percepcao: 0
    },
}
