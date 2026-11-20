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
        deslocamento: Bonus[],
        iniciativa: Bonus[],
        cd_especializacao: Bonus[],
    },
    tecnica: Tecnica|null,
    pericias: Pericias,
    habilidades: Habilidade[]
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

export type Pericias = {
    percepcao: number,
    //...
}