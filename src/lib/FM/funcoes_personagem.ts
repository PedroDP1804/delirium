import type { Bônus, Treinamento } from "./personagem";

// Calcula o bônus de treinamento com base no nível
export function bônus_treinamento(nivel:number):number {
    if (nivel < 5) return 2;
    if (nivel < 9) return 3;
    if (nivel < 13) return 4;
    if (nivel < 17) return 5;
    return 6
}

// Calcula o modificador de um atributo
export function modificador_atributo(base_atributo:number, lista_bônus:Bônus[]):number {
    let total_atributo = base_atributo
    lista_bônus.forEach((bônus)=>{total_atributo += bônus.valor})
    return Math.trunc(total_atributo/2) - 5
}

// Calcula o multiplicador do bônus de uma perícia/TR com base no treinamento
export function multiplicador_treinamento(treinamento:Treinamento):number {
    switch (treinamento) {
        case "Destreinado":
            return 0
        case "Treinado":
            return 1
        case "Mestre":
            return 1.5
    }
}

// Calcula o bônus