export type Personagem = {
    nome:string,
    origem: string,
    especializacao: string,
    nivel: number,
    grau: number,
    atributo_cd: AtributoChar,
    atributos: Atributos,
    stats: {
        pv_atual: number,
        pv_temp: number,
        pe_atual: number,
        pe_temp: number,
        integridade_atual: number,
        rds: RD[],
    },
    bonus: {
        pv_max: Bonus[],
        pe_max: Bonus[],
        defesa: Bonus[],
        deslocamento: Bonus[],
        atencao: Bonus[],
        iniciativa: Bonus[],
        cd_especializacao: Bonus[],
        cd_tecnica: Bonus[],
        pericias: {pericia:string, bonus:Bonus}[],
        atributos: {
            força: Bonus[],
            destreza: Bonus[],
            constituição: Bonus[],
            inteligência: Bonus[],
            sabedoria: Bonus[],
            presença: Bonus[],
        }
    },
    tecnica: Tecnica|null,
    pericias: Pericias,
    habilidades: Habilidade[],
    aptidao: {
        aura: number,
        controle_leitura: number,
        barreira: number,
        dominio: number,
        energia_reversa: number,
        aptidoes: Habilidade[]
    }
}

export type AtributoChar = "F"|"D"|"C"|"I"|"S"|"P"

export type Atributos = {
    força: number,
    destreza: number,
    constituição: number,
    inteligência: number,
    sabedoria: number,
    presença: number,
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
    custo: number,
    caracteristicas: Caracteristicas,
    descricao: {
        mecanica: string,
        narrativa: string,
    },
    observacoes: string[],
}

export type Habilidade = {
    nome: string,
    tipo: string,
    descricao:string,
    obtida_no_nivel: number,
}

export type Caracteristicas = {
  cor: string,
  conjuracao?: string,
  alcance?: string,
  alvo?: string,
  duracao?: string,
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

export type Treinamento = "D"|"T"|"M"

export type Pericias = {
    acrobacia: Treinamento,
    atletismo: Treinamento,
    direção: Treinamento,
    enganação: Treinamento,
    feitiçaria: Treinamento,
    furtividade: Treinamento,
    história: Treinamento,
    intimidação: Treinamento,
    intuição: Treinamento,
    investigação: Treinamento,
    medicina: Treinamento,
    ocultismo: Treinamento,
    ofício: Treinamento,
    percepção: Treinamento,
    performance: Treinamento,
    persuasão: Treinamento,
    prestidigitação: Treinamento,
    sobrevivência: Treinamento,
    tecnologia: Treinamento,
    teologia: Treinamento,
}

export const pericias_atributos = {
    "Acrobacia": "D",
    "Atletismo": "F",
    "Direção": "S",
    "Enganação": "P",
    "Feitiçaria": "I",
    "Furtividade": "D",
    "História": "I",
    "Intimidação": "P",
    "Intuição": "S",
    "Investigação": "I",
    "Medicina": "S",
    "Ocultismo": "S",
    "Ofício": "I",
    "Percepção": "S",
    "Performance": "P",
    "Persuasão": "P",
    "Prestidigitação": "D",
    "Sobrevivência": "S",
    "Tecnologia": "I",
    "Teologia": "I",
}

export const lista_atributos = {
    "força": "Força",
    "destreza": "Destreza",
    "constituição": "Constituição",
    "inteligência": "Inteligência",
    "sabedoria": "Sabedoria",
    "presença": "Presença",
}

export const atributos_letra_nome = {
    "F": "força",
    "D": "destreza",
    "C": "constituição",
    "I": "inteligência",
    "S": "sabedoria",
    "P": "presença",
}