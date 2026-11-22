import { atributo_letra, bonus_treinamento, modificador, nome_atributo_letra } from "@/src/lib/FM/funcoes_personagem";
import { atributos_letra_nome, pericias_atributos, type Atributos, type Pericias, type Personagem, type Treinamento } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { Dices } from "lucide-react";

type InfoPericiaProps = {
    nome:string,
    personagem:Personagem 
}

export function InfoPericia({nome, personagem}:InfoPericiaProps) {
    
    // Modificador de atributo
    const chave_atributo = atributos_letra_nome[pericias_atributos[nome as keyof typeof pericias_atributos] as keyof typeof atributos_letra_nome] as keyof Atributos
    let total_atributo = personagem.atributos[chave_atributo]
    personagem.bonus.atributos[chave_atributo].forEach((bonus)=>{total_atributo += bonus.bonus})
    const modificador_atributo = modificador(total_atributo)

    // Bônus de Treinamento
    let texto_treinamento = ""
    let multiplicador_treinamento = 0
    switch (personagem.pericias[nome.toLowerCase() as keyof Pericias]) {
        case "D":
            texto_treinamento = "Destreinado"
            multiplicador_treinamento = 0
            break
        case "T":
            texto_treinamento = "Treinado"
            multiplicador_treinamento = 1
            break
        case "M":
            texto_treinamento = "Mestre"
            multiplicador_treinamento = 1.5
            break
    }
    const soma_treinamento = Math.trunc(multiplicador_treinamento*bonus_treinamento(personagem.nivel))

    // Bônus extras da perícia
    const lista_bonus_pericia = personagem.bonus.pericias.filter((bonus_pericia)=>(bonus_pericia.pericia == nome.toLowerCase()))
    let total_bonus_extras_pericia = 0
    lista_bonus_pericia.forEach((bonus)=>{total_bonus_extras_pericia += bonus.bonus.bonus})


    // Cálculo final e texto do informativo
    const bonus_total_pericia = modificador_atributo + Math.trunc(personagem.nivel/2) + soma_treinamento + total_bonus_extras_pericia

    let texto_rolagem =   `1d20 + ${bonus_total_pericia}`
                            + `\n\n1d20`
                            + `\n+ ${modificador_atributo} (Mod. ${chave_atributo})`
                            + `\n+ ${Math.trunc(personagem.nivel/2)} (Metade do nível)`
                            + `\n+ ${soma_treinamento} (${multiplicador_treinamento} x Bônus de Treinamento)`
    lista_bonus_pericia.forEach((bonus)=>{texto_rolagem += `\n+ ${bonus.bonus.bonus} (${bonus.bonus.fonte})`})

    return (
        <h2 className="text-lg flex gap-1">
            <Informativo texto={texto_rolagem} icone={<Dices/>}/>
            <b>{nome}: </b>
            {texto_treinamento}
        </h2>
    )
}