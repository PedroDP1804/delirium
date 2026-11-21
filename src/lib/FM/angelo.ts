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
                        + "\n\t\t\t\t-Branco: Uma cor especial, a mistura de todas as cores-luz - ou especificamente das cores Vermelho, Verde e Azul, no modelo RGB. Se estiver com essas três cores infundidas, você pode gastar uma Ação Bônus para misturá-las, formando e infundindo a cor Branco. Você se sobrecarrega com todas as cores, uma amálgama de possibilidades, recebendo todos os benefícios das outras cores, mas fica Desorientado e Desprevinido até dissipar o efeito. Alternativamente, você pode infundir a cor branca diretamente (como Toque e Ação Bônus), mas não receber esses efeitos, nem negativos nem positivos; alguns Feitiços Brancos não podem ser conjurados com esse método."
                        + "\n\n\t\t\tUma mesma cor de um mesmo objeto só pode ser extraída uma vez por cena. Você pode ter até 3 cores infundidas simultaneamente, mas você gasta 1 PE por rodada se tiver duas e 3 PE por rodada se tiver três. Bônus de mesma cor não acumulam. Todas as cores infundidas são perdidas no fim da cena. Você pode descartar uma cor a qualquer momento como ação livre.",
            narrativa: "\t\t\t"
        },
        observacoes: [
            "O feitiço tem um requisito fácil, que é absorver a cor de um objeto, nisso ela ganha +2PE (que não aumentam o custo, mas permite ela ser mais forte), se tornando equivalente a um feitiço de 1o nivel. Eu segui as tabelas a partir da página 217 do livro pra balancear os efeitos, usando nivel 1 e duração duradoura/sustentada.",
            "O branco é um Voto Próprio Médio Temporário, por isso é mais forte",
        ]
    },
    {
        nome: "Pincelar",
        nivel: 1,
        custo: 1,
        caracteristicas: {
            cor: "Branco",
            conjuracao: "Ação Comum (ou Ação Bônus / Reação)",
            alcance: "12m",
            requisitos: [
                "Médio, +4PE/+2d | Ter a cor Branco infundida",
                "Médio, +4PE/+2d | Estar empunhando o Pincel Amaldiçoado",                
            ]
        },
        descricao: {
            mecanica:   "\t\t\tVocê pinta em pleno ar qualquer coisa que imaginar, trazendo-a à realidade."
                        + "\n\t\t\t\t• No geral, as propriedades da coisa pintada se mantêm, como peso, textura, aparência, etc."
                        + "\n\t\t\t\t• Você pode pintar uma única coisa de até tamanho Enorme (de OPRPG pq F&M n tem tamanho)."
                        + "\n\t\t\t\t• Você só pode pintar em espaços desocupados."
                        + "\n\t\t\t\t• A Pintura dura até o fim da cena."
                        + "\n\t\t\t\t• Qualquer dano proveniente de uma Pintura está limitado a 4d8, o tipo pode variar."
                        + "\n\t\t\t\t• Se a Pintura for equivalente a algum item, ele dever de até Custo 2."
                        + "\n\t\t\t\t• Se a Pintura for equivalente a um Shikigami, ele deve ser de até Terceiro Grau."
                        + "\n\t\t\t\t• A Pintura ainda é feita de tinta, então Pinturas que forem estruturas, shikigamis ou objetos têm 15 PV (ou as partes delas, se forem muito grandes)."
                        + "\n\n\t\t\tEste Feitiço pode ser conjurado como Ação Bônus ou Reação, mas nesses casos a capacidade dele diminui em uma e duas categorias, respectivamente. Isto é:"
                        + "\n\t\t\t\t• Enorme > Grande > Médio"
                        + "\n\t\t\t\t• Cena > Três Rodadas > Uma Rodada"
                        + "\n\t\t\t\t• 4d8 > 2d8 > Não pode causar dano"
                        + "\n\t\t\t\t• Custo 2 > Custo 1 > Custo 0"
                        + "\n\t\t\t\t• Terceiro Grau > Quarto Grau > Quarto Grau com -1 Ações/Características"
                        + "\n\t\t\t\t• 15 PV > 10 PV > 5 PV"
                        + "\n\t\t\tConjurar com ações menores diminui o tempo disponível para pintar, limitando a Pintura a imagens mais simples. Por exemplo, seria inviável pintar fielmente uma pessoa com uma Reação, mas talvez seria viável pintar um boneco de palito."
                        ,
            narrativa: "\t\t\tO mundo todo é minha tela em branco."
        },
        observacoes: [
            "O balanceamento foi meio no instinto.",
            "O dano 4d8 e os PV 15 coloquei assim pq mais acho q seria mt OP.",
            "Pros itens e shikigamis, eu considerei um nível acima na tabela do livro, pq tem 2 requisitos médios e a vida e dano são limitados independente do nível",
            "O tamanho e duração foi só no instinto tbm",
            "O Feitiço parece bem forte, mas tem dois requisitos médios e ainda é um Feitiço Branco, ent dá um desconto",
            "Marca Registrada reduz o custo em 1 PE"
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
            mecanica: "\t\t\tVocê emite um feixe concentrado de luz vermelha e infravermelha em um alvo, irradiando-o e causando fortes queimaduras em seu corpo. O alvo sofre 6d8 de dano Queimante. Se for bem-sucedido num Teste de Resistência de Fortitude, sofre apenas metade do dano e evita a condição.",
            narrativa: "\t\t\tRadiação de Corpo Negro é a energia térmica que um corpo emite na forma de luz, normalmente infravermelha. Objetos muito quentes, o suficiente pra esquentar outros objetos por irradiação, chegam a emitir luz vermelha."
        },
        observacoes: ["(3d/12m) (+2d req.) (+1d/-6m)"]
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
    {
        nome: "Brilho Acalentador",
        nivel: 1,
        custo: 2,
        caracteristicas: {
            cor: "Amarelo",
            conjuracao: "Ação Comum",
            alcance: "12m",
            alvo: "Uma Quantidade de Criaturas à sua Escolha",
            requisitos: ["Médio, +4PE/+2d | Ter a cor Amarelo infundida",]
        },
        descricao: {
            mecanica: "\t\t\tVocê replica o brilho aconchegante do Sol num ponto acima de você, reconfortando seus aliados. Todas as Criaturas escolhidas no alcance recebem 4d6 PV Temporários.",
            narrativa:  "\t\t\tNada como sentir sobre a pele a luz quente do amanhecer, após uma noite fria e escura."
                        + "\n\t\t\tO Sol na verdade é branco, mas o vemos amarelo porque a atmosfera espalha a luz azul e violeta que ele emite, e o que sobra é uma cor amarelada."
        },
        observacoes: ["(2d) (+2d req.)"]
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
        forca: 10,
        destreza: 14,
        constituicao: 10,
        inteligencia: 16,
        sabedoria: 14,
        presenca: 12,
    },
    stats: {
        pv_max: 15,
        pv_atual: 15,
        pv_temp: 0,
        pe_max: 15,
        pe_atual: 15,
        pe_temp: 0,
        integridade_atual: 15,
        defesa: 10,
        deslocamento: 9,
        rds: []
    },
    bonus: {
        atencao: [{fonte:"paleta", bonus:0}],
        defesa: [],
        deslocamento: [],
        iniciativa: [],
        cd_especializacao: [],
    },
    tecnica: {
        nome: "Aquarela",
        descricao: "\t\t\tA técnica permite conjurar fenômenos, manifestar características e aplicar efeitos associados diretamente a cores específicas, seja por aspectos do universo ou pela concepção humana."
                    + "\n\t\t\tComo parte da técnica, você recebe também os seguintes itens:"
                    + "\n\t\t\t\t• Um tablete retangular com vários círculos coloridos, feitos de acrílico, similar a uma paleta de cores. Ocupa meio espaço."
                    + "\n\t\t\t\t• Um Pincel Amaldiçoado, imbuído com sua Técnica, usado para conjurar Pincelar. Ocupa meio espaço"
                    ,
        atributo: "I",
        bonus_cd: [],
        feiticos: feiticos_angelo,
        expansao: null,
        maxima: null,
    },
    pericias: {
        percepcao: 0
    },
    habilidades: [

        // Nível 1
        {
            nome: "Bônus em Atributo",
            tipo: "Característica de Origem (Inato)",
            descricao: "\t\t\tUm inato aumenta o valor de um atributo em 2 pontos [Inteligência] e o de outro em 1 ponto [Sabedoria].",
            obtida_no_nivel: 1
        },
        {
            nome: "Talento Natural",
            tipo: "Característica de Origem (Inato)",
            descricao: "\t\t\tUm inato é talentoso, tendo a energia amaldiçoada como algo natural para si. Você recebe um Talento [Afinidade Com Técnica] a sua escolha no 1° nível. Além disso, uma única vez a partir do 4° nível, você pode escolher receber um talento adicional a sua escolha ao subir de nível.",
            obtida_no_nivel: 1
        },
        {
            nome: "Afinidade Com Técnica",
            tipo: "Talento Geral (Talento Natural)",
            descricao: "\t\t\tCom uma afinidade superior com a sua técnica amaldiçoada, você consegue a desenvolver melhor, criando mais extensões dela. Ao obter esse talento, você recebe um Feitiço adicional [Dupla Imagem]. Nos níveis 5, 10, 15 e 20 você recebe mais um Feitiço adicional.",
            obtida_no_nivel: 1
        },
        {
            nome: "Marca Registrada",
            tipo: "Característica de Origem (Inato)",
            descricao: "\t\t\tSua técnica é inata e exclusiva para si, o que o torna naturalmente mais familiar com ela. Sendo capaz de usá-la de diferentes formas, uma delas se destaca como a sua marca registrada. Você recebe um Feitiço adicional [Pincelar], o qual terá o seu custo reduzido em 1 PE.",
            obtida_no_nivel: 1
        },
        {
            nome: "Domínio dos Fundamentos",
            tipo: "Habilidade Base de Especialista em Técnica",
            descricao:  "\t\t\tComo um especialista em técnicas, você tem uma maior dominância sobre os fundamentos da energia amaldiçoada e das suas habilidades. Você aprende duas das Mudanças de Fundamento abaixo no primeiro nível [Cruel e Potente] e uma adicional no nível 12."
                        + "\n\n\t\t\t\t• Feitiço Cruel: Quando usar um Feitiço que força um Teste de Resistência você pode gastar 1 ponto de energia amaldiçoada para aumentar a CD do teste em 2 ou 2 pontos para aumentar em 4."            
                        + "\n\t\t\t\t• Feitiço Distante. Quando usar um Feitiço a distância, você pode gastar 2 pontos de energia amaldiçoada para dobrar seu alcance. Caso seja um Feitiço corpo-a-corpo, você pode gastar 2 pontos de energia para a dar um alcance de 9 metros."
                        + "\n\t\t\t\t• Feitiço Duplicado. Uma vez por rodada, quando usar um Feitiço de dano cujo alvo seja apenas uma criatura, você pode gastar pontos de energia para dar um segundo alvo a habilidade. O custo é igual ao dobro do nível do Feitiço (considere 1 para Feitiços nível 0)."
                        + "\n\t\t\t\t• Feitiço Expansivo. Quando usar um Feitiço em área, você pode gastar 3 pontos de energia amaldiçoada para aumentar a área em um valor igual a metade da área padrão (1,5x do total)."
                        + "\n\t\t\t\t• Feitiço Potente. Quando usar um Feitiço de dano, você pode gastar 2 pontos de energia amaldiçoada e rolar novamente uma quantidade de dados de dano igual ao seu modificador de Inteligência ou Sabedoria, utilizando os melhores resultados."
                        + "\n\t\t\t\t• Feitiço Preciso. Quando usar um Feitiço que utilize um teste de ataque, você pode gastar 1 ponto de energia amaldiçoada para receber +2 de acerto ou 2 pontos de energia amaldiçoada para receber +4 de acerto."
                        + "\n\t\t\t\t• Feitiço Rápido. Uma vez por rodada, quando for utilizar um Feitiço cuja conjuração seja uma Ação Completa ou Comum, você pode gastar PE para reduzir seu custo em ação em um (Completa para Comum ou Comum para Bônus). O custo é igual ao dobro do nível do Feitiço (considere 1 para Feitiços nível 0). Pré-Requisito: Nível 6.",
            obtida_no_nivel: 1
        },
        {
            nome: "Feitiço Cruel",
            tipo: "Mudança de Fundamento (Domínio dos Fundamentos)",
            descricao: "\t\t\tQuando usar um Feitiço que força um Teste de Resistência você pode gastar 1 ponto de energia amaldiçoada para aumentar a CD do teste em 2 ou 2 pontos para aumentar em 4.",
            obtida_no_nivel: 1
        },
        {
            nome: "Feitiço Potente",
            tipo: "Mudança de Fundamento (Domínio dos Fundamentos)",
            descricao: "\t\t\tQuando usar um Feitiço de dano, você pode gastar 2 pontos de energia amaldiçoada e rolar novamente uma quantidade de dados de dano igual ao seu modificador de Inteligência ou Sabedoria, utilizando os melhores resultados.",
            obtida_no_nivel: 1
        },
        {
            nome: "Conjuração Aprimorada",
            tipo: "Habilidade Base de Especialista em Técnica",
            descricao:  "\t\t\tTodos podem utilizar Feitiços, mas você consegue os aprimorar e extrair um maior potencial. Sempre que utilizar um Feitiço que cause dano, você soma um bônus ao total de dano causado baseado no nível do Feitiço, de acordo com a tabela abaixo."
                        + "\n\n\t\t\t\tNível do Feitiço | Bônus de Dano"
                        + "\n\t\t\t\tNível 1 | Modificador de Atributo"
                        + "\n\t\t\t\tNível 2 | Modificador de Atributo"
                        + "\n\t\t\t\tNível 3 | Dobro do Modificador de Atributo"
                        + "\n\t\t\t\tNível 4 | 2x Mod. de Atributo + Nível do Personagem"
                        + "\n\t\t\t\tNível 5 | 2x Mod. de Atributo + 2x Nível do Personagem"
                        + "\n\t\t\t\tTécnica Máxima | 3x Mod. de Atributo + 3x Nível do Personagem"
                        + "\n\n\t\t\tAlém disso, você passa a receber novos Feitiços em todo nível, ao invés de apenas nos níveis pares."
            ,
            obtida_no_nivel: 1
        },

        // Nível 2
        {
            nome: "Feitiço Adicional",
            tipo: "(Conjuração Aprimorada)",
            descricao: "\t\t\tRecebe um Feitiço adicional por subir de nível [Brilho Acalentador].",
            obtida_no_nivel: 2
        },
        {
            nome: "Explosão Encadeada",
            tipo: "Habilidade de Especialista em Técnicas (Especialização)",
            descricao: "\t\t\tUm bom desempenho em uma conjuração o permite aumentar o poder destrutivo, encadeando a força. Ao rolar o dano máximo em um dado de dano de um Feitiço de dano, você rola mais um dado de dano de mesmo valor, adicionando o resultado ao total de dano. Tal habilidade funciona apenas uma vez por dado do Feitiço: caso role-se um dado adicional por causa de Explosão Encadeada, e tal seja dano máximo, não se ativa novamente.",
            obtida_no_nivel: 2
        },
        // {
        //     nome: "Nome",
        //     tipo: "Tipo (Origem)",
        //     descricao: "\t\t\t",
        //     obtida_no_nivel: 2
        // },
    ]
}


//Hardcoded por enquanto (TO-DO)
export const feiticos_futuros:Feitiço[] = [
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
        nome: "Hora Dourada",
        nivel: 1,
        custo: 2,
        caracteristicas: {
            cor: "Amarelo",
            conjuracao: "Ação Bônus",
            alvo: "Próprio",
            requisitos: ["Médio, +4PE/+2d | Ter a cor Amarelo infundida",]
        },
        descricao: {
            mecanica: "\t\t\tEssa é a hora perfeita para produzir sua obra-prima. Até o fim do seu próximo turno, todos os Feitiços que você conjurar (exceto este) são aprimorados, potencializando o efeito em o equivalente a +4 PE / +2d e recebendo uma melhoria de ritual. Só pode ser usado uma vez por cena, e até duas vezes por dia",
            narrativa:  "\t\t\tA golden hour é o período do dia logo após o nascer do sol ou pouco antes do pôr do sol, quando a luz natural fica mais suave, difusa e 'dourada', e é muito valorizada para fotografias, vídeos e pinturas por proporcionar belas imagens."
                        + "\n\t\t\tOcorre porque, com o Sol no horizonte, a luz atravessa mais atmosfera, perdendo mais os tons azulados e sobrando os tons de amarelo, laranja e vermelho."
        },
        observacoes: [
            "(2d) (+2d req.)",
            "Nem tem dado sla, foi por vibes"
        ]
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
    //         duracao: "",
    //         requisitos: ["Médio, +4PE/+2d | Ter a cor Vermelho infundida",]
    //     },
    //     descricao: {
    //         mecanica: "\t\t\t",
    //         narrativa: "\t\t\t"
    //     },
    //     observacoes: ["(2d) (+2d req.)"]
    // },
]