export type Personagem = {
    nome:string,
    origem: string,
    especializacao: string,
    nível: number,
    grau: number,
    atributo_cd_especialização: ChaveAtributo,
    atributos: Atributos,
    stats: {
        pv_atual: number,
        pv_temp: number,
        pe_atual: number,
        pe_temp: number,
        integridade_atual: number,
        rds: RD[],
    },
    bônus: {
        pv_max: Bônus[],
        pe_max: Bônus[],
        defesa: Bônus[],
        deslocamento: Bônus[],
        atenção: Bônus[],
        iniciativa: Bônus[],
        cd_especialização: Bônus[],
        cd_técnica: Bônus[],
        perícias: {perícia:string, bônus:Bônus}[],
        testes_resistência: {resistência:string, bônus:Bônus}[],
        atributos: {
            força: Bônus[],
            destreza: Bônus[],
            constituição: Bônus[],
            inteligência: Bônus[],
            sabedoria: Bônus[],
            presença: Bônus[],
        }
    },
    técnica: Técnica|null,
    perícias: Perícias,
    testes_resistência: TestesResistência,
    habilidades: Habilidade[],
    aptidão: {
        aura: number,
        controle_leitura: number,
        barreira: number,
        domínio: number,
        energia_reversa: number,
        aptidões: Habilidade[]
    }
}

export type ChaveAtributo = "força" | "destreza" | "constituição" | "inteligência" | "sabedoria" | "presença"

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

export type Bônus = {
    valor: number,
    fonte: string,
}

export type Técnica = {
    nome: string,
    descrição: string,
    atributo: ChaveAtributo,
    feitiços: Feitiço[],
    expansão: Especial|null,
    máxima: Especial|null,
}

export type Feitiço = {
    nome: string,
    nível: number,
    custo: number,
    caracteristicas: {
        cor: string,
        conjuração?: string,
        alcance?: string,
        alvo?: string,
        duração?: string,
        requisitos: string[],
    },
    descrição: {
        mecânica: string,
        narrativa: string,
    },
    observações: string[],
}

export type Habilidade = {
    nome: string,
    tipo: string,
    descrição:string,
    obtida_no_nível: number,
}

// Máxima / Expansão
export type Especial = {
    nome: string,
    tipo: string,
    descrição_mecânica: string,
    descrição_narrativa: string,
}

export type Treinamento = "Destreinado"|"Treinado"|"Mestre"

export type Perícias = {
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

export type TestesResistência = {
    astúcia: Treinamento,
    fortitude: Treinamento,
    integridade: Treinamento,
    reflexos: Treinamento,
    vontade: Treinamento,
}

export const resistencia_atributos = {
    astúcia: "inteligência",
    fortitude: "constituição",
    integridade: "constituição",
    reflexos: "destreza",
    vontade: "sabedoria",
}

export const perícias_atributos = {
    acrobacia: "destreza",
    atletismo: "força",
    direção: "sabedoria",
    enganação: "presença",
    feitiçaria: "inteligência",
    furtividade: "destreza",
    história: "inteligência",
    intimidação: "presença",
    intuição: "sabedoria",
    investigação: "inteligência",
    medicina: "sabedoria",
    ocultismo: "sabedoria",
    ofício: "inteligência",
    percepção: "sabedoria",
    performance: "presença",
    persuasão: "presença",
    prestidigitação: "destreza",
    sobrevivência: "sabedoria",
    tecnologia: "inteligência",
    teologia: "inteligência",
}

export const atributos_chave_nome = {
    força: "Força",
    destreza: "Destreza",
    constituição: "Constituição",
    inteligência: "Inteligência",
    sabedoria: "Sabedoria",
    presença: "Presença",
}