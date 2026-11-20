import type { Atributos } from "./personagem";

export function bonus_treinamento(nivel:number):number {
    if (nivel < 5) return 2;
    if (nivel < 9) return 3;
    if (nivel < 13) return 4;
    if (nivel < 17) return 5;
    return 6
}

export function modificador(atributo:number):number {
    return Math.trunc(atributo/2) - 5
}

export function atributo_letra(letra:string, atributos:Atributos) {
    switch (letra) {
        case "F":
            return atributos.forca
        case "D":
            return atributos.destreza
        case "C":
            return atributos.constituicao
        case "I":
            return atributos.inteligencia
        case "S":
            return atributos.sabedoria
        case "P":
            return atributos.presenca
        default:
            return 0
    }
}

export function nome_atributo_letra(letra:string) {
    switch (letra) {
        case "F":
            return "Força"
        case "D":
            return "Destreza"
        case "C":
            return "Constituição"
        case "I":
            return "Inteligência"
        case "S":
            return "Sabedoria"
        case "P":
            return "Presença"
        default:
            return undefined
    }
}

export function atencao(percepcao: number, outros:{fonte:string, bonus:number}[]) {
    let bonus = 0
    outros.forEach((o)=>{bonus += o.bonus})
    return 10 + percepcao + bonus
}

export function defesa(destreza: number, nivel:number, outros:{fonte:string, bonus:number}[]) {
    let bonus = 0
    outros.forEach((o)=>{bonus += o.bonus})
    return 10 + modificador(destreza) + Math.trunc(nivel/2) + bonus
}

export function cd_habilidade(atributo: number, nivel:number, outros:{fonte:string, bonus:number}[]) {
    let bonus = 0
    outros.forEach((o)=>{bonus += o.bonus})
    return 10 + modificador(atributo) + Math.trunc(nivel/2) + bonus_treinamento(nivel) + bonus
}