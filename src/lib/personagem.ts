export type Personagem = {
    nome:string,
    origem: string,
    especializacao: string,
    nivel: number,
    grau: number,
    atributo_cd: AtributoChar,
    atributos: Atributos,
    stats: {
        pv_max: number,
        pv_atual: number,
        pv_temp: number,
        pe_max: number,
        pe_atual: number,
        pe_temp: number,
        integridade_atual: number,
        defesa: number,
        deslocamento: number,
        rds: RD[],
    },
    bonus: {
        atencao: Bonus[],
        defesa: Bonus[],
        cd_especializacao: Bonus[],
    },
    tecnica: Tecnica|null,
    pericias: Pericias,
}

export type AtributoChar = "F"|"D"|"C"|"I"|"S"|"P"

export type Atributos = {
    forca: number,
    destreza: number,
    constituicao: number,
    inteligencia: number,
    sabedoria: number,
    presenca: number,
}

export type RD = {
    tipo_dano: string,
    resistencia: number,
    fonte: string,
}

export type Bonus = {
    fonte: string,
    bonus: number,
}

export type Tecnica = {
    nome: string,
    descricao: string,
    atributo: AtributoChar,
    bonus_cd: Bonus[],
    feiticos: Feitiço[],
    expansao: Expansao|null,
    maxima: Maxima|null,
}

export type Feitiço = {
    nome: string,
    nivel: number,
    caracteristicas: Caracteristicas,
    descricao: {
        mecanica: string,
        narrativa: string,
    },
    observacoes: string[],
}

export type Caracteristicas = {
  cor: string,
  conjuracao: string,
  alcance: string,
  alvo?: string,
  requisitos: string[],
}

export type Expansao = {
    nome: string,
    tipo: string,
    descricao_mecanica: string,
    descricao_narrativa: string,
}

export type Maxima = {
    nome: string,
    tipo: string,
    descricao_mecanica: string,
    descricao_narrativa: string,
}

export type Pericias = {
    percepcao: number,
    //...
}

//Hardcoded por enquanto (TO-DO)
const feiticos_angelo:Feitiço[] = [
    {
        nome: "Dupla Imagem",
        nivel: 1,
        caracteristicas: {
        cor: "Verde",
        conjuracao: "Reação + Ação Bônus + Ação Comum",
        alcance: "60m",
        alvo: "Uma Criatura",
        requisitos: ["Médio, +4PE/+2d | Ter a cor Verde infundida", "Médio, +4PE/+2d | Alvo ter conjurado um feitiço de nível 1 ou inferior nessa rodada + uso de várias ações",]
        },
        descricao: {
            mecanica: "\t\t\tQuando um Feitiço de nível igual ou inferior a este é conjurado em seu campo de visão e dentro do alcance, você pode usar uma Reação pra espelhar a imagem daquele Feitiço, criando um reflexo. Até o fim de seu próximo turno, você pode usar uma Ação Bônus para focalizar esse reflexo em si mesmo, temporariamente tendo-o como se fosse seu. Até o fim do outro turno (o segundo após espelhar), você pode gastar 2 PE e uma Ação Comum e ou a ação original do Feitiço, o que for maior, para replicar a conjuração dele, podendo ser em sua versão base ou com Votos.\n\t\tAlém disso, você pode aplicar duas melhorias de ritual nele. Você conjura o Feitiço como se fosse seu, tomando quaisquer decisões necessárias para conjurá-lo. Não se pode espelhar Feitiços de um mesmo alvo mais de uma vez na mesma cena.",
            narrativa: "\t\t\tEmbora possa se pensar que espelhos são brancos, prateados ou cinzas, eles na verdade refletem a luz verde ligeiramente melhor do que qualquer outra cor, fazendo com que sejam levemente esverdeados, apesar de ser difícil perceber. Isso acontece porque o vidro comum usado na fabricação absorve levemente os outros espectros de luz e reflete com mais intensidade a faixa do verde."
        },
        observacoes: ["(12m) (+4PE req. -> +24m) (+4PE req. -> +24m) (+2 melhorias de ritual ação completa, usadas no feitiço copiado)"]
    },
    {
        nome: "Dispersão Celeste",
        nivel: 1,
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
